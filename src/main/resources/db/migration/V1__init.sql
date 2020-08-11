create table products (
  id          integer generated by default as identity constraint products_pkey primary key,
  category_id  integer,
  brand       varchar(25),
  model       varchar(25),
  price       numeric(19, 2),
  img         varchar,
  description text
);

create table categories (
	id					integer generated by default as identity constraint categories_pkey primary key,
	name        varchar(25),
	description varchar(255),
	img					varchar(255)
)



