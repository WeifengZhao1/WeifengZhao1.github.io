// Weifeng Zhao
// Assignment 7

// Part A
select count(*) from actors
union all
select count(*) from directors
union all
select count(*) from movies
union all
select count(*) from movie_revenues
union all
select count(*) from movies_actors


// Part B
// 1
select movie_name , release_date from movies

// 2
select first_name, last_name from directors
where nationality = 'American'

// 3
select * from actors
where gener = 'M' and date_of_birth > '1970-01-01'


// 4
select movie_name from movies
where movie_length >= 90 and movie_lang = 'English'


// Part C

// 1
select movie_name,movie_lang from movies
where movie_lang in ('English','Spanish', 'Korean')

// 2
select first_name,last_name from actors
where left(last_name,1) = 'M'
and date_of_birth between '1940-01-01' and '1969/12/31'

// 3
select first_name, last_name from directors
where nationality in ('British','French', 'German')
and date_of_birth between '1950-01-01' and '1980/12/31'
