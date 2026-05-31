# People Directory

## Premise

You have a list of people, where each person is a dictionary (object in JS) with `name`, `age`, and `hobbies` (a list of strings).

```python
people = [
    {"name": "Bob",   "age": 15, "hobbies": ["skiing", "falling"]},
    {"name": "Sally", "age": 31, "hobbies": ["sailing", "swimming"]},
    {"name": "Frank", "age": 85, "hobbies": ["tennis", "running", "falling"]},
]
```

Write three functions that operate on this list. This exercise practices iterating over a collection, reading values out of dictionaries, and combining the two.

## Requirements

### 1. `oldest_person(people)` / `oldestPerson(people)`
Return the **name** (string) of the oldest person in the list.

### 2. `all_hobbies(people)` / `allHobbies(people)`
Return a list of every unique hobby across everyone, sorted alphabetically. Duplicates should appear only once.

### 3. `filter_by_age(people, min_age, max_age)` / `filterByAge(people, minAge, maxAge)`
Return a list of the people (full dicts) whose `age` is between `min_age` and `max_age`, inclusive.

## Examples

```python
oldest_person(people)
# -> "Frank"

all_hobbies(people)
# -> ["falling", "running", "sailing", "skiing", "swimming", "tennis"]

filter_by_age(people, 18, 50)
# -> [{"name": "Sally", "age": 31, "hobbies": ["sailing", "swimming"]}]
```

## Test Your Code

Run the test file in each language folder:
- Python: `python people_directory_tests.py`
- JS: `node peopleDirectoryTests.js`

## Stretch

Once your tests pass, add a 4th function `hobby_count(people)` / `hobbyCount(people)` that returns a dictionary mapping each hobby to the number of people who have it.
