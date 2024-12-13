--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: BuyHistory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BuyHistory" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    item_id integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public."BuyHistory" OWNER TO postgres;

--
-- Name: BuyHistory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."BuyHistory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."BuyHistory_id_seq" OWNER TO postgres;

--
-- Name: BuyHistory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."BuyHistory_id_seq" OWNED BY public."BuyHistory".id;


--
-- Name: Cart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Cart" (
    id integer NOT NULL,
    item_id integer NOT NULL,
    quantity integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public."Cart" OWNER TO postgres;

--
-- Name: Cart_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Cart_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Cart_id_seq" OWNER TO postgres;

--
-- Name: Cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Cart_id_seq" OWNED BY public."Cart".id;


--
-- Name: Category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Category" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Category" OWNER TO postgres;

--
-- Name: Category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Category_id_seq" OWNER TO postgres;

--
-- Name: Category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;


--
-- Name: Discount; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Discount" (
    id integer NOT NULL,
    name text NOT NULL,
    discount_type_id integer NOT NULL,
    description text NOT NULL,
    config jsonb NOT NULL,
    "activeFrom" timestamp(3) without time zone NOT NULL,
    "activeTo" timestamp(3) without time zone NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Discount" OWNER TO postgres;

--
-- Name: DiscountUsage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."DiscountUsage" (
    id integer NOT NULL,
    buy_history_id integer NOT NULL,
    discount_id integer NOT NULL
);


ALTER TABLE public."DiscountUsage" OWNER TO postgres;

--
-- Name: DiscountUsage_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."DiscountUsage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."DiscountUsage_id_seq" OWNER TO postgres;

--
-- Name: DiscountUsage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."DiscountUsage_id_seq" OWNED BY public."DiscountUsage".id;


--
-- Name: Discount_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Discount_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Discount_id_seq" OWNER TO postgres;

--
-- Name: Discount_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Discount_id_seq" OWNED BY public."Discount".id;


--
-- Name: Discount_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Discount_type" (
    id integer NOT NULL,
    type text NOT NULL
);


ALTER TABLE public."Discount_type" OWNER TO postgres;

--
-- Name: Discount_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Discount_type_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Discount_type_id_seq" OWNER TO postgres;

--
-- Name: Discount_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Discount_type_id_seq" OWNED BY public."Discount_type".id;


--
-- Name: Item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Item" (
    id integer NOT NULL,
    price double precision NOT NULL,
    name text NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public."Item" OWNER TO postgres;

--
-- Name: Item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Item_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Item_id_seq" OWNER TO postgres;

--
-- Name: Item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Item_id_seq" OWNED BY public."Item".id;


--
-- Name: Picture; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Picture" (
    id integer NOT NULL,
    item_id integer NOT NULL,
    path text NOT NULL
);


ALTER TABLE public."Picture" OWNER TO postgres;

--
-- Name: Picture_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Picture_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Picture_id_seq" OWNER TO postgres;

--
-- Name: Picture_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Picture_id_seq" OWNED BY public."Picture".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text NOT NULL,
    point integer NOT NULL,
    "isAdmin" boolean NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: BuyHistory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BuyHistory" ALTER COLUMN id SET DEFAULT nextval('public."BuyHistory_id_seq"'::regclass);


--
-- Name: Cart id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cart" ALTER COLUMN id SET DEFAULT nextval('public."Cart_id_seq"'::regclass);


--
-- Name: Category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);


--
-- Name: Discount id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Discount" ALTER COLUMN id SET DEFAULT nextval('public."Discount_id_seq"'::regclass);


--
-- Name: DiscountUsage id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DiscountUsage" ALTER COLUMN id SET DEFAULT nextval('public."DiscountUsage_id_seq"'::regclass);


--
-- Name: Discount_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Discount_type" ALTER COLUMN id SET DEFAULT nextval('public."Discount_type_id_seq"'::regclass);


--
-- Name: Item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Item" ALTER COLUMN id SET DEFAULT nextval('public."Item_id_seq"'::regclass);


--
-- Name: Picture id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Picture" ALTER COLUMN id SET DEFAULT nextval('public."Picture_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: BuyHistory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BuyHistory" (id, user_id, item_id, quantity) FROM stdin;
\.


--
-- Data for Name: Cart; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Cart" (id, item_id, quantity, user_id) FROM stdin;
4	2	2	1
1	1	2	1
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Category" (id, name) FROM stdin;
2	accessory
3	electronic
1	cloth
\.


--
-- Data for Name: Discount; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Discount" (id, name, discount_type_id, description, config, "activeFrom", "activeTo", "isActive", "createdAt", "updatedAt") FROM stdin;
1	coupon	1	discount 50 THB	{"value": 50, "discount_type": "amount"}	1970-01-01 00:00:00	1970-01-01 00:00:00	t	2024-12-13 08:49:05.722	2024-12-13 08:50:00.542
2	coupon	1	discount 10%	{"value": 10, "discount_type": "percentage"}	1970-01-01 00:00:00	1970-01-01 00:00:00	t	2024-12-13 08:49:05.722	2024-12-13 08:50:00.542
4	on top	2	discount by using point up to 20%	{"type": "point", "point_cap": 20}	1970-01-01 00:00:00	1970-01-01 00:00:00	t	2024-12-13 08:49:05.722	2024-12-13 08:50:00.542
5	seasonal	3	discount 40 THB at every 300 THB	{"value": 40, "threshold": 300}	1970-01-01 00:00:00	1970-01-01 00:00:00	t	2024-12-13 08:49:05.722	2024-12-13 08:50:00.542
3	on top	2	discount 15% of on cloth	{"type": "percentage", "value": 10, "category_id": 1}	1970-01-01 00:00:00	1970-01-01 00:00:00	t	2024-12-13 08:49:05.722	2024-12-13 08:58:44.049
\.


--
-- Data for Name: DiscountUsage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."DiscountUsage" (id, buy_history_id, discount_id) FROM stdin;
\.


--
-- Data for Name: Discount_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Discount_type" (id, type) FROM stdin;
3	seasonal
1	coupon
2	onTop
\.


--
-- Data for Name: Item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Item" (id, price, name, category_id) FROM stdin;
1	350	T-shirt	1
2	250	Hat	2
3	700	Hoodie	1
4	850	Watch	3
5	640	Bag	2
6	230	Belt	2
\.


--
-- Data for Name: Picture; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Picture" (id, item_id, path) FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, point, "isAdmin") FROM stdin;
1	user1	2000	f
\.


--
-- Name: BuyHistory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."BuyHistory_id_seq"', 1, false);


--
-- Name: Cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Cart_id_seq"', 5, true);


--
-- Name: Category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Category_id_seq"', 3, true);


--
-- Name: DiscountUsage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."DiscountUsage_id_seq"', 1, false);


--
-- Name: Discount_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Discount_id_seq"', 5, true);


--
-- Name: Discount_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Discount_type_id_seq"', 3, true);


--
-- Name: Item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Item_id_seq"', 6, true);


--
-- Name: Picture_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Picture_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: BuyHistory BuyHistory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BuyHistory"
    ADD CONSTRAINT "BuyHistory_pkey" PRIMARY KEY (id);


--
-- Name: Cart Cart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cart"
    ADD CONSTRAINT "Cart_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: DiscountUsage DiscountUsage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DiscountUsage"
    ADD CONSTRAINT "DiscountUsage_pkey" PRIMARY KEY (id);


--
-- Name: Discount Discount_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Discount"
    ADD CONSTRAINT "Discount_pkey" PRIMARY KEY (id);


--
-- Name: Discount_type Discount_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Discount_type"
    ADD CONSTRAINT "Discount_type_pkey" PRIMARY KEY (id);


--
-- Name: Item Item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Item"
    ADD CONSTRAINT "Item_pkey" PRIMARY KEY (id);


--
-- Name: Picture Picture_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Picture"
    ADD CONSTRAINT "Picture_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: User_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_name_key" ON public."User" USING btree (name);


--
-- Name: BuyHistory BuyHistory_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BuyHistory"
    ADD CONSTRAINT "BuyHistory_item_id_fkey" FOREIGN KEY (item_id) REFERENCES public."Item"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: BuyHistory BuyHistory_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BuyHistory"
    ADD CONSTRAINT "BuyHistory_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Cart Cart_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cart"
    ADD CONSTRAINT "Cart_item_id_fkey" FOREIGN KEY (item_id) REFERENCES public."Item"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Cart Cart_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cart"
    ADD CONSTRAINT "Cart_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: DiscountUsage DiscountUsage_buy_history_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DiscountUsage"
    ADD CONSTRAINT "DiscountUsage_buy_history_id_fkey" FOREIGN KEY (buy_history_id) REFERENCES public."BuyHistory"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: DiscountUsage DiscountUsage_discount_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DiscountUsage"
    ADD CONSTRAINT "DiscountUsage_discount_id_fkey" FOREIGN KEY (discount_id) REFERENCES public."Discount"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Discount Discount_discount_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Discount"
    ADD CONSTRAINT "Discount_discount_type_id_fkey" FOREIGN KEY (discount_type_id) REFERENCES public."Discount_type"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Item Item_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Item"
    ADD CONSTRAINT "Item_category_id_fkey" FOREIGN KEY (category_id) REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Picture Picture_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Picture"
    ADD CONSTRAINT "Picture_item_id_fkey" FOREIGN KEY (item_id) REFERENCES public."Item"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

