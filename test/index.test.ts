import EasyLocalStorage from '../src/index'

test('setItem', () => {
	EasyLocalStorage.setItem('name', 'zhao')
	expect(EasyLocalStorage.getItem('name')).toBe('zhao');
});
test('removeItem', () => {
	EasyLocalStorage.removeItem('name')
	expect(EasyLocalStorage.getItem('name')).toBe(null);
});
test('clear', () => {
	EasyLocalStorage.setItem('name', 'zhao')
	EasyLocalStorage.clear()
	expect(EasyLocalStorage.getItem('name')).toBe(null);
});

test('push', () => {
	EasyLocalStorage.push('arr', 10)
	expect(EasyLocalStorage.getItem('arr')).toStrictEqual([10]);
});
test('add', () => {
	EasyLocalStorage.add('user', 'name', 'zhao')
	expect(EasyLocalStorage.getItem('user')).toStrictEqual({ name: 'zhao' });
});
