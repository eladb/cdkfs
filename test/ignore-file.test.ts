import { IgnoreFile } from '../src';
import { synthSnapshot, TestProject } from './util';

test('ignorefile synthesises correctly', () => {
  // GIVEN
  const prj = new TestProject();

  // WHEN
  new IgnoreFile(prj, '.dockerignore');

  // THEN
  expect(splitAndIgnoreMarker(synthSnapshot(prj)['.dockerignore'])).toEqual([]);
});

test('ignorefile does not sort entries', () => {
  // GIVEN
  const prj = new TestProject();

  // WHEN
  const file = new IgnoreFile(prj, '.dockerignore');
  file.exclude('a.txt', 'b.txt');
  file.include('c.txt', 'd.txt');
  file.exclude('e.txt', 'f.txt');

  // THEN
  expect(splitAndIgnoreMarker(synthSnapshot(prj)['.dockerignore'])).toEqual([
    'a.txt',
    'b.txt',
    '!c.txt',
    '!d.txt',
    'e.txt',
    'f.txt',
  ]);
});

test('ignorefile omits duplicated includes and excludes', () => {
  // GIVEN
  const prj = new TestProject();

  // WHEN
  const file = new IgnoreFile(prj, '.dockerignore');
  file.exclude('a.txt', 'b.txt');
  file.include('c.txt', 'd.txt');
  file.exclude('a.txt', 'x.txt');
  file.include('c.txt', 'y.txt');

  // THEN
  expect(splitAndIgnoreMarker(synthSnapshot(prj)['.dockerignore'])).toEqual([
    'a.txt',
    'b.txt',
    '!c.txt',
    '!d.txt',
    'x.txt',
    '!y.txt',
  ]);
});

// parses file contents without 'Generated by...' spiel
function splitAndIgnoreMarker(fileContents: string) {
  return fileContents.split('\n').slice(1);
}
