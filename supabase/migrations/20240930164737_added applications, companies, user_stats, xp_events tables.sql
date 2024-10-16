create table "public"."applications" (
    "id" bigint generated by default as identity not null,
    "position" text,
    "company_id" bigint,
    "status" text,
    "salary" text,
    "notes" text,
    "link" text,
    "location" text,
    "type" text,
    "rejection_reason" text,
    "submitted_at" timestamp with time zone,
    "created_at" timestamp with time zone not null default now(),
    "user_id" uuid
);


alter table "public"."applications" enable row level security;

create table "public"."companies" (
    "id" bigint generated by default as identity not null,
    "name" text,
    "stack" text[]
);


alter table "public"."companies" enable row level security;

create table "public"."user_stats" (
    "id" bigint generated by default as identity not null,
    "level" bigint,
    "login_streak" bigint,
    "questions_answered" bigint,
    "bugs_fixed" bigint,
    "xp" bigint,
    "daily_challenges" bigint,
    "weekly_challenges" bigint,
    "user_id" uuid
);


alter table "public"."user_stats" enable row level security;

create table "public"."xp_events" (
    "id" bigint generated by default as identity not null,
    "event" text,
    "delta" bigint,
    "user_id" uuid,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."xp_events" enable row level security;

CREATE UNIQUE INDEX applications_pkey ON public.applications USING btree (id);

CREATE UNIQUE INDEX companies_pkey ON public.companies USING btree (id);

CREATE UNIQUE INDEX user_stats_pkey ON public.user_stats USING btree (id);

CREATE UNIQUE INDEX xp_events_pkey ON public.xp_events USING btree (id);

alter table "public"."applications" add constraint "applications_pkey" PRIMARY KEY using index "applications_pkey";

alter table "public"."companies" add constraint "companies_pkey" PRIMARY KEY using index "companies_pkey";

alter table "public"."user_stats" add constraint "user_stats_pkey" PRIMARY KEY using index "user_stats_pkey";

alter table "public"."xp_events" add constraint "xp_events_pkey" PRIMARY KEY using index "xp_events_pkey";

alter table "public"."applications" add constraint "applications_company_id_fkey" FOREIGN KEY (company_id) REFERENCES companies(id) not valid;

alter table "public"."applications" validate constraint "applications_company_id_fkey";

alter table "public"."applications" add constraint "applications_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."applications" validate constraint "applications_user_id_fkey";

alter table "public"."user_stats" add constraint "user_stats_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."user_stats" validate constraint "user_stats_user_id_fkey";

alter table "public"."xp_events" add constraint "xp_events_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."xp_events" validate constraint "xp_events_user_id_fkey";

grant delete on table "public"."applications" to "anon";

grant insert on table "public"."applications" to "anon";

grant references on table "public"."applications" to "anon";

grant select on table "public"."applications" to "anon";

grant trigger on table "public"."applications" to "anon";

grant truncate on table "public"."applications" to "anon";

grant update on table "public"."applications" to "anon";

grant delete on table "public"."applications" to "authenticated";

grant insert on table "public"."applications" to "authenticated";

grant references on table "public"."applications" to "authenticated";

grant select on table "public"."applications" to "authenticated";

grant trigger on table "public"."applications" to "authenticated";

grant truncate on table "public"."applications" to "authenticated";

grant update on table "public"."applications" to "authenticated";

grant delete on table "public"."applications" to "service_role";

grant insert on table "public"."applications" to "service_role";

grant references on table "public"."applications" to "service_role";

grant select on table "public"."applications" to "service_role";

grant trigger on table "public"."applications" to "service_role";

grant truncate on table "public"."applications" to "service_role";

grant update on table "public"."applications" to "service_role";

grant delete on table "public"."companies" to "anon";

grant insert on table "public"."companies" to "anon";

grant references on table "public"."companies" to "anon";

grant select on table "public"."companies" to "anon";

grant trigger on table "public"."companies" to "anon";

grant truncate on table "public"."companies" to "anon";

grant update on table "public"."companies" to "anon";

grant delete on table "public"."companies" to "authenticated";

grant insert on table "public"."companies" to "authenticated";

grant references on table "public"."companies" to "authenticated";

grant select on table "public"."companies" to "authenticated";

grant trigger on table "public"."companies" to "authenticated";

grant truncate on table "public"."companies" to "authenticated";

grant update on table "public"."companies" to "authenticated";

grant delete on table "public"."companies" to "service_role";

grant insert on table "public"."companies" to "service_role";

grant references on table "public"."companies" to "service_role";

grant select on table "public"."companies" to "service_role";

grant trigger on table "public"."companies" to "service_role";

grant truncate on table "public"."companies" to "service_role";

grant update on table "public"."companies" to "service_role";

grant delete on table "public"."user_stats" to "anon";

grant insert on table "public"."user_stats" to "anon";

grant references on table "public"."user_stats" to "anon";

grant select on table "public"."user_stats" to "anon";

grant trigger on table "public"."user_stats" to "anon";

grant truncate on table "public"."user_stats" to "anon";

grant update on table "public"."user_stats" to "anon";

grant delete on table "public"."user_stats" to "authenticated";

grant insert on table "public"."user_stats" to "authenticated";

grant references on table "public"."user_stats" to "authenticated";

grant select on table "public"."user_stats" to "authenticated";

grant trigger on table "public"."user_stats" to "authenticated";

grant truncate on table "public"."user_stats" to "authenticated";

grant update on table "public"."user_stats" to "authenticated";

grant delete on table "public"."user_stats" to "service_role";

grant insert on table "public"."user_stats" to "service_role";

grant references on table "public"."user_stats" to "service_role";

grant select on table "public"."user_stats" to "service_role";

grant trigger on table "public"."user_stats" to "service_role";

grant truncate on table "public"."user_stats" to "service_role";

grant update on table "public"."user_stats" to "service_role";

grant delete on table "public"."xp_events" to "anon";

grant insert on table "public"."xp_events" to "anon";

grant references on table "public"."xp_events" to "anon";

grant select on table "public"."xp_events" to "anon";

grant trigger on table "public"."xp_events" to "anon";

grant truncate on table "public"."xp_events" to "anon";

grant update on table "public"."xp_events" to "anon";

grant delete on table "public"."xp_events" to "authenticated";

grant insert on table "public"."xp_events" to "authenticated";

grant references on table "public"."xp_events" to "authenticated";

grant select on table "public"."xp_events" to "authenticated";

grant trigger on table "public"."xp_events" to "authenticated";

grant truncate on table "public"."xp_events" to "authenticated";

grant update on table "public"."xp_events" to "authenticated";

grant delete on table "public"."xp_events" to "service_role";

grant insert on table "public"."xp_events" to "service_role";

grant references on table "public"."xp_events" to "service_role";

grant select on table "public"."xp_events" to "service_role";

grant trigger on table "public"."xp_events" to "service_role";

grant truncate on table "public"."xp_events" to "service_role";

grant update on table "public"."xp_events" to "service_role";


