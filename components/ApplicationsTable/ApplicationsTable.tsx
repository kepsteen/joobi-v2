"use client";
import Link from "next/link";
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { LinkIcon } from "lucide-react";
import { getApplications } from "@/lib/utils/supabase/client-queries";
import { useEffect, useState } from "react";
import { Database } from "@/lib/types/supabase";
import { formatToDollars, formatDate } from "@/lib/utils/formatters";
import { cn } from "@/lib/utils/utils";

type Applications = Database["public"]["Tables"]["applications"]["Row"] & {
	company: string; // Added because it comes from the companies table join
};

const columnHelper = createColumnHelper<Applications>();

const columns = [
	columnHelper.accessor("status", {
		cell: (info) => {
			const status = info.getValue();
			return (
				<span
					className={cn(
						"badge text-nowrap",
						status === "Applied" && "badge-warning",
						status === "Rejected" && "badge-error",
						status === "Accepted" && "badge-success",
						status === "To apply" && "badge-info",
						status === "No answer" && "badge-outline"
					)}
				>
					{status}
				</span>
			);
		},
	}),
	columnHelper.accessor("company", {
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("position", {
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("submitted_at", {
		header: "date submitted",
		cell: (info) => (
			<span className="text-nowrap">
				{info.getValue() ? formatDate(info.getValue()) : null}
			</span>
		),
	}),
	columnHelper.accessor("link", {
		cell: (info) => {
			const url = info.getValue();
			return url ? (
				<Link href={url} target="_blank" rel="noopener noreferrer">
					<LinkIcon className="text-accent" />
				</Link>
			) : null;
		},
	}),
	columnHelper.accessor("salary", {
		cell: (info) => {
			const amount = info.getValue();
			return amount ? formatToDollars(amount) : null;
		},
	}),
	columnHelper.accessor("location", {
		cell: (info) => info.getValue(),
	}),
	columnHelper.accessor("type", {
		cell: (info) => info.getValue(),
	}),
];

export default function ApplicationsTable() {
	const [applications, setApplications] = useState<Applications[] | null>([]);

	useEffect(() => {
		const fetchApplications = async () => {
			const { applications } = await getApplications();
			setApplications(applications);
		};
		fetchApplications();
	}, []);

	const table = useReactTable<Applications>({
		data: applications ?? [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="h-full overflow-auto">
			<table className="table text-xs">
				<thead className="sticky top-0">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									className="text-primary bg-base-100 text-center text-md"
									key={header.id}
								>
									{flexRender(
										header.column.columnDef.header ?? header.column.id,
										header.getContext()
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
