-- CreateTable
CREATE TABLE "BreastLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BreastLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BreastLog" ADD CONSTRAINT "BreastLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
