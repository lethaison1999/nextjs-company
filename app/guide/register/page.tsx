import { GuideTabs } from "@/components/GuideTabs";
import { TableOfContents } from "@/components/TableOfContents";

const steps = [
  {
    id: "step-1",
    label: "Bước 1: Truy cập trang đăng ký",
    content: <p>Truy cập vào trang chủ...</p>,
  },
  {
    id: "step-2",
    label: "Bước 2: Nhập thông tin",
    content: <p>Điền đầy đủ họ tên, mật khẩu...</p>,
  },
  {
    id: "step-3",
    label: "Bước 3: Xác nhận và hoàn tất",
    content: <p>Click nút Đăng ký để hoàn tất quá trình.</p>,
  },
];

export default function RegisterGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex gap-8">
        {/* Tabs trái */}
        <aside className="w-48 sticky top-24 h-fit">
          <GuideTabs />
        </aside>

        {/* Nội dung giữa */}
        <main className="flex-1 space-y-32">
          {steps.map((step) => (
            <section
              key={step.id}
              id={step.id}
              className="scroll-mt-24 min-h-[60vh]"
            >
              <h2 className="text-xl font-bold mb-4">{step.label}</h2>
              <div className="text-gray-700">{step.content}</div>
            </section>
          ))}
        </main>

        {/* TOC phải */}
        <aside className="w-64 hidden lg:block">
          <TableOfContents sections={steps} />
        </aside>
      </div>
    </div>
  );
}
