'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SignUpForm({
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card className="overflow-hidden p-0">
				<CardContent className="grid p-0 md:grid-cols-2">
					<form className="p-6 md:p-8">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center text-center">
								<h1 className="text-2xl font-bold">Create Account</h1>
								<p className="text-muted-foreground text-balance">
									Register for an employee account
								</p>
							</div>
							<div className="grid gap-3">
								<Label htmlFor="employeeCode">Employee Code</Label>
								<Input id="employeeCode" type="text" placeholder="" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="fullName">Full Name</Label>
								<Input id="fullName" type="text" placeholder="" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="username">Username</Label>
								<Input id="username" type="text" placeholder="" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="password">Password</Label>
								<Input id="password" type="password" required />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="confirmPassword">Confirm Password</Label>
								<Input id="confirmPassword" type="password" required />
							</div>
							<Button type="submit" className="w-full">
								Sign Up
							</Button>
							<div className="text-center text-sm">
								Already have an account?{' '}
								<a href="#" className="underline underline-offset-4">
									Login
								</a>
							</div>
						</div>
					</form>
					<div className="bg-muted relative hidden md:block">
						<img
							src="https://placehold.co/400x500"
							alt="Image"
							className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
						/>
					</div>
				</CardContent>
			</Card>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				By clicking Sign Up, you agree to our <a href="#">Terms of Service</a>{' '}
				and <a href="#">Privacy Policy</a>.
			</div>
		</div>
	);
}
