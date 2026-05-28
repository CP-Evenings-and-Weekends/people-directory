from people_directory import oldest_person, all_hobbies, filter_by_age

people = [
    {"name": "Bob",   "age": 15, "hobbies": ["skiing", "falling"]},
    {"name": "Sally", "age": 31, "hobbies": ["sailing", "swimming"]},
    {"name": "Frank", "age": 85, "hobbies": ["tennis", "running", "falling"]},
]

# oldest_person
print(oldest_person(people) == "Frank")
print(oldest_person([{"name": "Alice", "age": 22, "hobbies": []}]) == "Alice")

# all_hobbies (sorted, unique)
print(all_hobbies(people) == ["falling", "running", "sailing", "skiing", "swimming", "tennis"])
print(all_hobbies([]) == [])

# filter_by_age (inclusive bounds)
print(filter_by_age(people, 18, 50) == [
    {"name": "Sally", "age": 31, "hobbies": ["sailing", "swimming"]},
])
print(filter_by_age(people, 0, 200) == people)
print(filter_by_age(people, 100, 200) == [])
print(filter_by_age(people, 15, 15) == [
    {"name": "Bob", "age": 15, "hobbies": ["skiing", "falling"]},
])
