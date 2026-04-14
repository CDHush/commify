-- Users profile (extends Supabase auth.users)
create table profiles(
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  display_name text,
  avatar_url text,
  bio text,
  is_artist boolean default false,
  created_at timestamp with time zone default now()
);

-- Artist specific details
create table artist_profiles (
 id uuid references profiles(id) on delete cascade primary key,
 portfolio_url text,
 twitter_url text,
 instagram_url text,
 tags text[],
 availability text check (availability in ('open', 'busy', 'closed')) default 'open'
);

-- Commission listings created by artist
create table listings (
 id uuid default gen_random_uuid() primary key,
 artist_id uuid references profiles(id) on delete cascade not null,
 title text not null,
 description text,
 price_from numeric(10,2) not null,
 delivery_days integer not null,
 category text not null,
 preview_image_url text,
 is_active boolean default true,
 created_at timestamp with time zone default now()
);

-- Orders placed by clients 
create table orders (
  id uuid default gen_random_uuid() primary key,
  listing_id uuid references listings(id) not null,
  client_id uuid references profiles(id) not null,
  artist_id uuid references profiles(id) not null,
  status text check (status in ('pending', 'accepted', 'in_progress', 'delivered', 'completed', 'cancelled')) default 'pending',
  price numeric(10,2) not null,
  details text,
  created_at timestamp with time zone default now()
);

-- Reviews left after completed orders
create table reviews (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references orders(id) not null,
  reviewer_id uuid references profiles(id) not null,
  artist_id uuid references profiles(id) not null,
  rating integer check (rating >= 1 and rating <= 5) not null,
  comment text,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security on all tables
alter table profiles enable row level security;
alter table artist_profiles enable row level security;
alter table listings enable row level security;
alter table orders enable row level security;
alter table reviews enable row level security;


