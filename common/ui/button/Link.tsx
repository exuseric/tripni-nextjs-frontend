"use client";
import { useRouter } from "next/navigation";
import { Link as AriaLink, LinkProps as AriaLinkProps, composeRenderProps } from "react-aria-components";
import { ButtonSize, buttonStyles, ButtonVariant } from "./button-styles";
import { useButtonGroup } from "./ButtonGroupContext";

// Correctly extend AriaLinkProps without omitting className
interface LinkProps extends AriaLinkProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isIconOnly?: boolean;
}

/**
 * Helper to determine if a link should use Next.js routing.
 * This checks if the href is internal to the application.
 */
const isInternalNextLink = (href: string): boolean => {
  if (!href) return false;
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }
  if (href.startsWith("#")) {
    return false;
  }
  try {
    const url = new URL(href, window.location.href);
    return url.origin === window.location.origin;
  } catch (e) {
    console.warn(`Link component received an invalid href: ${href}`, e);
    return false;
  }
};

export function Link(props: LinkProps) {
  const group = useButtonGroup();
  const { className, variant = group?.variant ?? 'quiet', size = group?.size, href, isIconOnly, ...rest } = props;
  const router = useRouter();

  const renderClassName = composeRenderProps(className, (cls, renderProps) =>
    buttonStyles({
      ...renderProps,
      variant,
      size,
      isIconOnly,
      className: cls,
    }),
  );

  return (
    <AriaLink
      {...rest}
      href={href}
      onHoverStart={() => {
        if (href && isInternalNextLink(href)) {
          router.prefetch(href);
        }
      }}
      className={renderClassName}
    />
  );
}
