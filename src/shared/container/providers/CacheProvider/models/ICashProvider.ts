export default interface ICacheProvider {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    save(key: string, value: any): Promise<void>;
    recover<T>(key: string): Promise<T | null>;
    invalidate(key: string): Promise<void>;
    invalidatePrefix(prefix: string): Promise<void>;
}
