-- CreateTable
CREATE TABLE "SafetyLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SafetyLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SafetyLog" ADD CONSTRAINT "SafetyLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
