// Weifeng Zhao
// Assignment 8

// Part A
-- 1. How many directors are these per nationality?
select nationality,count(nationality) as count from directors
group by nationality
order by count desc

-- 2. What is the sum total movie length for each age certificate and movie language combination?
select age_certificate,movie_lang,sum(movie_length) from movies
group by age_certificate,movie_lang

-- 3. Return the movie languages which have a sum total movie length of over 500 minutes.
select movie_lang, sum(movie_length) as total from movies
group by movie_lang
having sum(movie_length) > 500

// Part B
-- 1. Select the directors first and last names, the movie names and release dates for all Chinese, Korean and Japanese movies.
select dr.first_name, dr.last_name, mo.movie_name, mo.release_date
from directors dr join movies mo
on dr.director_id = mo.director_id
group by dr.first_name, dr.last_name, mo.movie_name, mo.release_date,mo.movie_lang
having mo.movie_lang in ('Chinese','Japanese','Korean')


-- 2. Select the movie names, release dates and international takings of all English language movies.
select mo.movie_name, mo.release_date, mr.international_takings
from movies mo join movie_revenues mr
on mo.movie_id = mr.movie_id
group by  mo.movie_name, mo.release_date, mr.international_takings,mo.movie_lang
having mo.movie_lang in ('English') and mr.international_takings is not null
order by mr.international_takings desc


-- 3. Select the movie names, domestic takings and international takings for all movies 
-- with either missing domestic takings or missing international takings and order the results by movie name.
select mo.movie_name, mr.domestic_takings, mr.international_takings
from movies mo join movie_revenues mr
on mo.movie_id = mr.movie_id
group by mo.movie_name, mr.domestic_takings, mr.international_takings
having mr.domestic_takings is null or mr.international_takings is null
order by mo.movie_name


-- 4. Count the number of movies that each director has directed.
select dr.first_name, dr.last_name, count(movie_name) 
from directors dr join movies mo
on dr.director_id = mo.director_id
group by dr.first_name, dr.last_name
order by count(movie_name) desc


-- 5 Select the first and last names of all the actors who have starred in the best international selling movie (or: in the movie directed by Wes Anderson)?
select ac.first_name, ac.last_name, mr.international_takings
from actors ac join movies_actors mac
on ac.actor_id = mac.actor_id
join movie_revenues mr
on mac.movie_id = mr.movie_id
group by ac.first_name, ac.last_name,mr.international_takings
having max(international_takings) is not null
order by max(international_takings) desc

// Part C
-- 1. Select the first and last names of all the actors older than Marlon Brando
-- "Marlon"	"Brando"	"1924-04-03"
select first_name, last_name, date_of_birth from actors
where date_of_birth < (select date_of_birth from actors
where first_name = 'Marlon' and last_name = 'Brando')
order by  date_of_birth asc

-- 2. Select the movie names of all movies that have domestic takings above 300 million
select mo.movie_name
from movies mo join movie_revenues mr
on mo.movie_id = mr.movie_id
group by mo.movie_name,mr.domestic_takings 
having mr.domestic_takings is not null and mr.domestic_takings > 300

-- 3. Return the shortest and longest movie length for movies with an above average domestic takings.
select min(movie_length) as shortest_movie_length,max(movie_length) as longest_movie_length
from movies mo join movie_revenues mr
on mo.movie_id = mr.movie_id
where domestic_takings > 
(select avg(domestic_takings) from movie_revenues)
	

-- 4. Select the first name, last name and date of birth for the oldest actors of each gender.
select first_name, last_name, date_of_birth,gender
from actors
group by first_name, last_name, date_of_birth, gender
having date_of_birth is not null and gender = 'M'
order by date_of_birth asc
limit 1 


select first_name, last_name, date_of_birth,gender
from actors
group by first_name, last_name, date_of_birth, gender
having date_of_birth is not null and gender = 'F'
order by date_of_birth asc
limit 1



-- 5. Select the movie name, movie length and age certificate for movies with an above average length for their age certificate.
-- average length: 14.7428571428571429
select movie_name, movie_length, age_certificate
from movies
where age_certificate ~ '^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$' and cast(age_certificate as integer) 
>
(select avg(cast(age_certificate as integer)) from movies
WHERE age_certificate ~ '^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$')
order by age_certificate desc
