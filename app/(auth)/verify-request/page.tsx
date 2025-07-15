import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function VerifyRequest() {
    return (
        <>
        <Card className="flex flex-col items-center space-y-2">
            <CardHeader className="text-center">
                <CardTitle>Please Check Your Email</CardTitle>
                <CardDescription>We have sent a verification email to your email address. Please check your email and use OTP to verify your email.</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                <InputOTP maxLength={6} className="gap-2">
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
                <p className="text-sm text-muted-foreground">Enter 6-digits code sent to your email</p>
                </div>

                <Button className="w-full">Verify</Button>
            </CardContent>
        </Card>
        </>
    )
}