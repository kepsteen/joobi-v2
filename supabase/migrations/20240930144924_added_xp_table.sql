create table "public"."xp_to_level" (
    "level" bigint not null,
    "xp_required" numeric
);


alter table "public"."xp_to_level" enable row level security;

CREATE UNIQUE INDEX xp_to_level_pkey ON public.xp_to_level USING btree (level);

alter table "public"."xp_to_level" add constraint "xp_to_level_pkey" PRIMARY KEY using index "xp_to_level_pkey";

grant delete on table "public"."xp_to_level" to "anon";

grant insert on table "public"."xp_to_level" to "anon";

grant references on table "public"."xp_to_level" to "anon";

grant select on table "public"."xp_to_level" to "anon";

grant trigger on table "public"."xp_to_level" to "anon";

grant truncate on table "public"."xp_to_level" to "anon";

grant update on table "public"."xp_to_level" to "anon";

grant delete on table "public"."xp_to_level" to "authenticated";

grant insert on table "public"."xp_to_level" to "authenticated";

grant references on table "public"."xp_to_level" to "authenticated";

grant select on table "public"."xp_to_level" to "authenticated";

grant trigger on table "public"."xp_to_level" to "authenticated";

grant truncate on table "public"."xp_to_level" to "authenticated";

grant update on table "public"."xp_to_level" to "authenticated";

grant delete on table "public"."xp_to_level" to "service_role";

grant insert on table "public"."xp_to_level" to "service_role";

grant references on table "public"."xp_to_level" to "service_role";

grant select on table "public"."xp_to_level" to "service_role";

grant trigger on table "public"."xp_to_level" to "service_role";

grant truncate on table "public"."xp_to_level" to "service_role";

grant update on table "public"."xp_to_level" to "service_role";


