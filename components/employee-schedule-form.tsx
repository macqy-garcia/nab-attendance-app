'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, PlusCircle, Save, Trash2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { DatePickerWithRange } from './date-picker-with-range';
import { Switch } from '@/components/ui/switch';

export function EmployeeScheduleForm() {
	const [selectedEmployee, setSelectedEmployee] = React.useState('');
	const [schedules, setSchedules] = React.useState([
		{ id: 1, isRestDay: false, timeStart: '09:00', timeEnd: '17:00' },
	]);

	// Mock employee data - replace with actual API call
	const employees = [
		{ id: '1', name: 'Rowel Payongayong' },
		{ id: '2', name: 'Jane Smith' },
		{ id: '3', name: 'David Johnson' },
	];

	const addScheduleRow = () => {
		const newId =
			schedules.length > 0 ? Math.max(...schedules.map((s) => s.id)) + 1 : 1;
		setSchedules([
			...schedules,
			{ id: newId, isRestDay: false, timeStart: '09:00', timeEnd: '17:00' },
		]);
	};

	const removeScheduleRow = (id) => {
		setSchedules(schedules.filter((schedule) => schedule.id !== id));
	};

	const updateSchedule = (id, field, value) => {
		setSchedules(
			schedules.map((schedule) =>
				schedule.id === id ? { ...schedule, [field]: value } : schedule,
			),
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would save the schedules to your database
		console.log('Employee:', selectedEmployee);
		console.log('Schedules:', schedules);
		// API call would go here
	};

	return (
		<Card className="w-full max-w-4xl mx-auto">
			<CardHeader>
				<CardTitle className="text-2xl">Employee Schedule Assignment</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-6">
						<div className="space-y-2">
							<Label htmlFor="employee">Select Employee</Label>
							<Select
								value={selectedEmployee}
								onValueChange={setSelectedEmployee}
							>
								<SelectTrigger id="employee" className="w-full">
									<SelectValue placeholder="Select an employee" />
								</SelectTrigger>
								<SelectContent>
									{employees.map((employee) => (
										<SelectItem key={employee.id} value={employee.id}>
											{employee.name}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<Label>Schedule Date Range</Label>
							<DatePickerWithRange />
						</div>

						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<Label>Daily Schedules</Label>
								<Button
									type="button"
									variant="outline"
									size="sm"
									onClick={addScheduleRow}
									className="flex items-center gap-1"
								>
									<PlusCircle className="h-4 w-4" /> Add Schedule
								</Button>
							</div>

							<div className="space-y-4">
								{schedules.map((schedule) => (
									<div
										key={schedule.id}
										className="flex items-end gap-3 p-4 border rounded-md"
									>
										<div className="flex items-center gap-2">
											<Switch
												id={`rest-day-${schedule.id}`}
												checked={schedule.isRestDay}
												onCheckedChange={(checked) =>
													updateSchedule(schedule.id, 'isRestDay', checked)
												}
											/>
											<Label htmlFor={`rest-day-${schedule.id}`}>
												Rest Day
											</Label>
										</div>

										{!schedule.isRestDay && (
											<>
												<div className="grid gap-1.5 flex-1">
													<Label htmlFor={`time-start-${schedule.id}`}>
														Start Time
													</Label>
													<Input
														id={`time-start-${schedule.id}`}
														type="time"
														value={schedule.timeStart}
														onChange={(e) =>
															updateSchedule(
																schedule.id,
																'timeStart',
																e.target.value,
															)
														}
														disabled={schedule.isRestDay}
													/>
												</div>
												<div className="grid gap-1.5 flex-1">
													<Label htmlFor={`time-end-${schedule.id}`}>
														End Time
													</Label>
													<Input
														id={`time-end-${schedule.id}`}
														type="time"
														value={schedule.timeEnd}
														onChange={(e) =>
															updateSchedule(
																schedule.id,
																'timeEnd',
																e.target.value,
															)
														}
														disabled={schedule.isRestDay}
													/>
												</div>
											</>
										)}

										{schedules.length > 1 && (
											<Button
												type="button"
												variant="outline"
												size="icon"
												className="h-10 w-10 shrink-0"
												onClick={() => removeScheduleRow(schedule.id)}
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="mt-6 flex justify-end">
						<Button type="submit" className="flex items-center gap-1">
							<Save className="h-4 w-4" /> Save Schedule
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
