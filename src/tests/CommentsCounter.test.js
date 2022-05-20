import displayMovies from '../../_mocks_/displayMovies.js';
import { TestData } from './testData.js';

describe('Number of movies test', () => {
  test('Number of movies', () => {
    expect(displayMovies(TestData.list1)).toBe(8);
  });
  test('Number of movies', () => {
    expect(displayMovies(TestData.list2)).toBe(13);
  });
  test('Number of movies', () => {
    expect(displayMovies(TestData.list3)).toBe(2);
  });
});
