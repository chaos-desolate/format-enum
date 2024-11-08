export type EnumItem = {
    key: number | string;
    value: number | string;
    desc: number | string;
};
export type Options = {
    [x: string]: any;
};
declare function createEnum(data: EnumItem[]): {
    getItem: (value: string | number) => EnumItem | undefined;
    getByKey: (value: string | number) => string | number | undefined;
    getByValue: (value: string | number) => string | number | undefined;
    getByDesc: (value: string | number) => string | number | undefined;
    getByList: () => EnumItem[];
    getByOptions: (fieldNames?: Options) => Options[];
    has: (value: string | number) => boolean;
};
export default createEnum;
