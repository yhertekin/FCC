--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    age_in_millions_of_years integer,
    description text,
    has_life boolean
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(30) NOT NULL,
    distance_from_earth numeric,
    description text,
    is_spherical boolean,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    distance_from_earth numeric,
    description text,
    has_life boolean,
    is_spherical boolean,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: planet_star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet_star (
    planet_id integer,
    star_id integer,
    planet_star_id integer NOT NULL,
    name character varying(30) NOT NULL
);


ALTER TABLE public.planet_star OWNER TO freecodecamp;

--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(30) NOT NULL,
    age_in_millions_of_years integer,
    description text,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_id_seq OWNER TO freecodecamp;

--
-- Name: star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_id_seq OWNED BY public.star.star_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Andromeda Galaxy', 100, 'Andromeda Nebula', false);
INSERT INTO public.galaxy VALUES (2, 'Milky Way', 1361, 'Includes Solar System', true);
INSERT INTO public.galaxy VALUES (3, 'Galaxy 3', 10, 'Galaxy 3 Description', false);
INSERT INTO public.galaxy VALUES (4, 'Galaxy 4', 10, 'Galaxy 4 Description', true);
INSERT INTO public.galaxy VALUES (5, 'Galaxy 5', 10, 'Galaxy 5 Description', false);
INSERT INTO public.galaxy VALUES (6, 'Galaxy 6', 10, 'Galaxy 6 Description', false);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon', 1, 'Our Moon', true, 1);
INSERT INTO public.moon VALUES (2, 'Moon 2', 3, 'Moon 2 Description', true, 1);
INSERT INTO public.moon VALUES (3, 'Moon 3', 3, 'Moon 3 Description', true, 2);
INSERT INTO public.moon VALUES (4, 'Moon 4', 31, 'Moon 4 Description', false, 3);
INSERT INTO public.moon VALUES (5, 'Moon 5', 31, 'Moon 5 Description', false, 3);
INSERT INTO public.moon VALUES (6, 'Moon 6', 23, 'Moon 6 Description', false, 3);
INSERT INTO public.moon VALUES (7, 'Moon 7', 700, 'Moon 7 Description', false, 4);
INSERT INTO public.moon VALUES (8, 'Moon 8', 300, 'Moon 8 Description', true, 4);
INSERT INTO public.moon VALUES (9, 'Moon 9', 87, 'Moon 9 Description', true, 4);
INSERT INTO public.moon VALUES (10, 'Moon 10', 93, 'Moon 10 Description', true, 5);
INSERT INTO public.moon VALUES (11, 'Moon 11', 193, 'Moon 11 Description', true, 5);
INSERT INTO public.moon VALUES (12, 'Moon 12', 353, 'Moon 12 Description', false, 5);
INSERT INTO public.moon VALUES (13, 'Moon 13', 167, 'Moon 13 Description', true, 6);
INSERT INTO public.moon VALUES (14, 'Moon 14', 177, 'Moon 14 Description', true, 6);
INSERT INTO public.moon VALUES (15, 'Moon 15', 17, 'Moon 15 Description', true, 6);
INSERT INTO public.moon VALUES (16, 'Moon 16', 83, 'Moon 16 Description', true, 6);
INSERT INTO public.moon VALUES (18, 'Moon 17', 3, 'Moon 17 Description', true, 3);
INSERT INTO public.moon VALUES (19, 'Moon 18', 5, 'Moon 18 Description', true, 1);
INSERT INTO public.moon VALUES (20, 'Moon 19', 9, 'Moon 19 Description', true, 2);
INSERT INTO public.moon VALUES (21, 'Moon 20', 1, 'Moon 20 Description', true, 6);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Earth', 0, 'Out Planet', true, true, 1);
INSERT INTO public.planet VALUES (2, 'Planet 2', 10, 'Planet 2 Description', true, true, 2);
INSERT INTO public.planet VALUES (3, 'Planet 3', 10, 'Planet 3 Description', true, true, 3);
INSERT INTO public.planet VALUES (4, 'Planet 4', 10, 'Planet 4 Description', false, false, 1);
INSERT INTO public.planet VALUES (5, 'Planet 5', 10, 'Planet 5 Description', false, true, 4);
INSERT INTO public.planet VALUES (6, 'Planet 6', 13110, 'Planet 6 Description', true, true, 7);
INSERT INTO public.planet VALUES (8, 'Planet 7', 130, 'Planet 7 Description', true, false, 7);
INSERT INTO public.planet VALUES (9, 'Planet 8', 50, 'Planet 8 Description', true, false, 6);
INSERT INTO public.planet VALUES (10, 'Planet 9', 50, 'Planet 9 Description', true, true, 2);
INSERT INTO public.planet VALUES (11, 'Planet 10', 9, 'Planet 10 Description', false, true, 4);
INSERT INTO public.planet VALUES (12, 'Planet 11', 49, 'Planet 11 Description', false, false, 6);
INSERT INTO public.planet VALUES (13, 'Planet 12', 49, 'Planet 12 Description', true, false, 6);


--
-- Data for Name: planet_star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet_star VALUES (1, 1, 1, 'Star Planet 1');
INSERT INTO public.planet_star VALUES (2, 2, 2, 'Star Planet 2');
INSERT INTO public.planet_star VALUES (3, 3, 3, 'Star Planet 3');


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Mirach', 50, 'Beta Andromedae', 1);
INSERT INTO public.star VALUES (2, 'Sun', 10, 'Our Sun', 2);
INSERT INTO public.star VALUES (3, 'Sun 3', 1, 'Sun 3 Description', 3);
INSERT INTO public.star VALUES (4, 'Sun 4', 3, 'Sun 4 Description', 4);
INSERT INTO public.star VALUES (6, 'Sun 5', 12, 'Sun 5 Description', 5);
INSERT INTO public.star VALUES (7, 'Sun 6', 1123, 'Sun 6 Description', 6);


--
-- Name: galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_id_seq', 6, true);


--
-- Name: moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_id_seq', 21, true);


--
-- Name: planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_id_seq', 13, true);


--
-- Name: star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_id_seq', 7, true);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: planet_star planet_star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_star
    ADD CONSTRAINT planet_star_name_key UNIQUE (name);


--
-- Name: planet_star planet_star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_star
    ADD CONSTRAINT planet_star_pkey PRIMARY KEY (planet_star_id);


--
-- Name: star star_galaxy_id_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_key UNIQUE (galaxy_id);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: galaxy unique_galaxy_id; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT unique_galaxy_id UNIQUE (galaxy_id);


--
-- Name: galaxy unique_galaxy_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT unique_galaxy_name UNIQUE (name);


--
-- Name: moon unique_id; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT unique_id UNIQUE (moon_id);


--
-- Name: moon unique_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT unique_name UNIQUE (name);


--
-- Name: planet unique_planet_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT unique_planet_name UNIQUE (name);


--
-- Name: star fk_galaxy_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT fk_galaxy_id FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- Name: moon fk_planet_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT fk_planet_id FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet fk_star_id; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT fk_star_id FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: planet_star planet_star_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_star
    ADD CONSTRAINT planet_star_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet_star planet_star_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_star
    ADD CONSTRAINT planet_star_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- PostgreSQL database dump complete
--

