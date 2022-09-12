-- AlterTable
ALTER TABLE "Statement" ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "description" DROP NOT NULL;
DROP SEQUENCE "Statement_user_id_seq";
