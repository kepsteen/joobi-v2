create table "public"."quiz_questions" (
    "id" bigint generated by default as identity not null,
    "question" text,
    "type" text,
    "subject" text,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."quiz_questions" enable row level security;

CREATE UNIQUE INDEX quiz_questions_pkey ON public.quiz_questions USING btree (id);

alter table "public"."quiz_questions" add constraint "quiz_questions_pkey" PRIMARY KEY using index "quiz_questions_pkey";

grant delete on table "public"."quiz_questions" to "anon";

grant insert on table "public"."quiz_questions" to "anon";

grant references on table "public"."quiz_questions" to "anon";

grant select on table "public"."quiz_questions" to "anon";

grant trigger on table "public"."quiz_questions" to "anon";

grant truncate on table "public"."quiz_questions" to "anon";

grant update on table "public"."quiz_questions" to "anon";

grant delete on table "public"."quiz_questions" to "authenticated";

grant insert on table "public"."quiz_questions" to "authenticated";

grant references on table "public"."quiz_questions" to "authenticated";

grant select on table "public"."quiz_questions" to "authenticated";

grant trigger on table "public"."quiz_questions" to "authenticated";

grant truncate on table "public"."quiz_questions" to "authenticated";

grant update on table "public"."quiz_questions" to "authenticated";

grant delete on table "public"."quiz_questions" to "service_role";

grant insert on table "public"."quiz_questions" to "service_role";

grant references on table "public"."quiz_questions" to "service_role";

grant select on table "public"."quiz_questions" to "service_role";

grant trigger on table "public"."quiz_questions" to "service_role";

grant truncate on table "public"."quiz_questions" to "service_role";

grant update on table "public"."quiz_questions" to "service_role";

