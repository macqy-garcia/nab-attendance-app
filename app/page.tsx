import { DatePickerWithRange } from '@/components/date-picker-with-range';
import { EmployeeScheduleForm } from '@/components/employee-schedule-form';
import { LoginForm } from '@/components/login-form';
import { SignUpForm } from '@/components/sign-up-form';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="h-screen grid place-items-center">
			<EmployeeScheduleForm />
		</div>
	);
}
