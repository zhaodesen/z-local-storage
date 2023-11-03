export type Reviver = (this: any, key: string, value: any) => any;

export default class EasyLocalStorage {

	static readonly storage: Storage = window.localStorage

	static setItem<T>(key: string, value: T): void {
		this.storage.setItem(key, JSON.stringify(value))
	};

	static getItem<T>(key: string, reviver?: Reviver): T | null {
		const value = this.storage.getItem(key)
		if (!value) return null
		return reviver ? JSON.parse(value, reviver) : JSON.parse(value)
	}

	static removeItem(key: string): void {
		this.storage.removeItem(key)
	}

	static clear(): void {
		this.storage.clear()
	}

	static push<T>(key: string, value: T) {
		const arr = this.getItem<T[]>(key) ?? []
		if (!Array.isArray(arr)) throw new Error('value is not an Array!')
		arr.push(value)
		this.setItem(key, arr)
	};

	static add<T>(key: string, propertyKey: string, propertyValue: T) {
		const obj: Record<string, T> = this.getItem<Record<string, T>>(key) ?? {}
		if (typeof obj !== 'object') throw new Error('value is not an Object!')
		obj[propertyKey] = propertyValue
		this.setItem(key, obj)
	};
}
