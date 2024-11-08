export type EnumItem = {
	key: number | string;
	value: number | string;
	desc: number | string;
};

export type Options = {
	[x: string]: any;
};

function createEnum(data: EnumItem[]): {
	getItem: (value: string | number) => EnumItem | undefined;
	getByKey: (value: string | number) => string | number | undefined;
	getByValue: (value: string | number) => string | number | undefined;
	getByDesc: (value: string | number) => string | number | undefined;
	getByList: () => EnumItem[];
	getByOptions: (fieldNames?: Options) => Options[];
	has: (value: string | number) => boolean;
} {
	const list = data || [];

	const map = new Map();

	list.forEach(item => {
		map.set(item.key, item);
		map.set(item.value, item);
		map.set(item.desc, item);
	});

	const getItem = (value: string | number): EnumItem | undefined => map.get(value);
	return {
		/**
		 * @param key or value or desc
		 * @description get enum item
		 */
		getItem,
		/**
		 * @param key or value or desc
		 * @description get enum key
		 */
		getByKey: (value: string | number) => {
			const item = getItem(value);
			return item?.key;
		},
		/**
		 * @param key or value or desc
		 * @description get enum value
		 */
		getByValue: (value: string | number) => {
			const item = getItem(value);
			return item?.value;
		},
		/**
		 * @param key or value or desc
		 * @description get enum desc
		 */
		getByDesc: (value: string | number) => {
			const item = getItem(value);
			return item?.desc;
		},
		/**
		 * @description Gets all enum items
		 */
		getByList: () => {
			return list;
		},
		/**
		 * @param fieldNames
		 * @description get formatted enum options
		 */

		getByOptions: fieldNames => {
			const fieldName = fieldNames || { label: 'desc', value: 'value' };
			const optionKeys = Object.keys(fieldName);
			return list.map(item => {
				const options: Options = {};
				for (const key of optionKeys) {
					options[key] = item[fieldName[key] as keyof EnumItem];
				}
				return options;
			});
		},
		/**
		 * @param key or value or desc
		 * @description enum has param
		 */
		has: (value: string | number) => {
			return map.has(value);
		}
	};
}
export default createEnum;
