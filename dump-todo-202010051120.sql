PGDMP                     	    x            todo     12.4 (Ubuntu 12.4-1.pgdg18.04+1)     13.0 (Ubuntu 13.0-1.pgdg18.04+1)     t           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            u           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            v           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            w           1262    16384    todo    DATABASE     Y   CREATE DATABASE todo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE todo;
                postgres    false                        2615    16386    todo    SCHEMA        CREATE SCHEMA todo;
    DROP SCHEMA todo;
                postgres    false            �            1259    16387    users    TABLE     s   CREATE TABLE todo.users (
    id character varying,
    login character varying,
    password character varying
);
    DROP TABLE todo.users;
       todo         heap    postgres    false    6            q          0    16387    users 
   TABLE DATA           2   COPY todo.users (id, login, password) FROM stdin;
    todo          postgres    false    203            q      x������ � �     