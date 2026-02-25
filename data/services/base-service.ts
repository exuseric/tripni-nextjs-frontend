import { auth } from "@clerk/nextjs/server";
import { Options } from "./lib/types";

type APIResponse<R> = {
  error: boolean;
  data: R | null;
  message?: string;
  statusCode?: number;
};

export class BaseService<TSelect, TInsert = TSelect> {
  private _options: Options<TInsert | Partial<TInsert>> = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  constructor(protected _path: string) {}

  options(options: Options<TInsert | Partial<TInsert>>): this {
    this._options = {
      ...this._options,
      ...options,
      headers: { ...this._options.headers, ...options.headers },
    };
    return this;
  }

  protected async withAuth<R>(): Promise<APIResponse<R>> {
    const { getToken } = await auth();
    const token = await getToken();
    this._options.headers = {
      ...this._options.headers,
      Authorization: `Bearer ${token}`,
    };
    return this.execute<R>();
  }

  private async execute<R>(): Promise<APIResponse<R>> {
    const { body, ...rest } = this._options;
    const options = body ? { ...rest, body: JSON.stringify(body) } : rest;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${this._path}`, options);

    if (!res.ok) {
      const fallback: APIResponse<null> = {
        error: true,
        message: res.statusText,
        statusCode: res.status,
        data: null,
      };
      return res.json().catch(() => fallback);
    }

    return { data: await res.json(), error: false };
  }

  getAll = () => this.withAuth<TSelect[]>();
  get = () => this.withAuth<TSelect>();

  create(data: TInsert) {
    return this.options({ method: "POST", body: data }).withAuth<TSelect>();
  }

  update(data: Partial<TInsert>) {
    return this.options({ method: "PATCH", body: data }).withAuth<TSelect>();
  }

  remove() {
    return this.options({ method: "DELETE" }).withAuth<void>();
  }
}
