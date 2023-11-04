import ZLocalStorage from '../src/index'

test('setItem', () => {
	ZLocalStorage.setItem('name', 'zhao')
	expect(ZLocalStorage.getItem('name')).toBe('zhao');
});
test('removeItem', () => {
	ZLocalStorage.removeItem('name')
	expect(ZLocalStorage.getItem('name')).toBe(null);
});
test('clear', () => {
	ZLocalStorage.setItem('name', 'zhao')
	ZLocalStorage.clear()
	expect(ZLocalStorage.getItem('name')).toBe(null);
});

test('push', () => {
	ZLocalStorage.push('arr', 10)
	expect(ZLocalStorage.getItem('arr')).toStrictEqual([10]);
});
test('add', () => {
	ZLocalStorage.add('user', 'name', 'zhao')
	expect(ZLocalStorage.getItem('user')).toStrictEqual({ name: 'zhao' });
});
