'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { useState } from "react";

export default function VerifyRequest() {

  const [otp, setOtp] = useState("");

  return (
    <>
        <Card className="w-full mx-auto">
            <CardHeader className="text-center">
                <CardTitle>Please verify your email</CardTitle>
                <CardDescription>
                    We have sent a verification email to your email address. Please verify your email to continue.
                </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-2">
                <InputOTP value={otp} onChange={(value) => setOtp(value)} maxLength={6} className="gap-2">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>

                <p>Enter the 6 digits code sent to your email</p>
              </div>
            </CardContent>
        </Card>
    </>
  )
}