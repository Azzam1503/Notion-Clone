ALTER TABLE "subscriptions" ALTER COLUMN "ended_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "subscriptions" ALTER COLUMN "cancel_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "subscriptions" ALTER COLUMN "canceled_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "subscriptions" ALTER COLUMN "trial_start" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "subscriptions" ALTER COLUMN "trial_end" DROP NOT NULL;