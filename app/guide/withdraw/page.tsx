import { GuideTabs } from "@/components/GuideTabs";
import { TableOfContents } from "@/components/TableOfContents";

const steps = [
  {
    id: "step-1",
    label: "Rút tiền qua Thẻ cào",
    content: (
      <>
        <p>
          Chọn hình thức <strong>Thẻ cào</strong> tại mục <em>Rút tiền</em>.
        </p>
        <p>Chọn nhà mạng, mệnh giá và số lượng.</p>
        <p>Nhấn xác nhận và chờ hệ thống xử lý.</p>
      </>
    ),
  },
  {
    id: "step-2",
    label: "Rút tiền qua Momo",
    content: (
      <>
        <p>
          Chọn phương thức <strong>Momo</strong>.
        </p>
        <p>Nhập số ví nhận tiền và xác nhận giao dịch.</p>
        <p>Thường mất khoảng 1-3 phút để hoàn tất.</p>
      </>
    ),
  },
  {
    id: "step-3",
    label: "Rút tiền qua ATM",
    content: (
      <>
        <p>
          Chọn hình thức <strong>ATM</strong>.
        </p>
        <p>Điền thông tin tài khoản ngân hàng (STK, ngân hàng, tên chủ TK).</p>
        <p>Giao dịch sẽ được xử lý trong 5–10 phút.</p>
      </>
    ),
  },
];

export default function WithdrawPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <GuideTabs />
      <div className="flex">
        <aside className="w-64 hidden lg:block">
          <TableOfContents sections={steps} />
        </aside>
        <main className="flex-1 space-y-32 scroll-smooth py-10">
          {steps.map((step) => (
            <section
              key={step.id}
              id={step.id}
              className="scroll-mt-24 min-h-[70vh]"
            >
              <h2 className="text-2xl font-bold mb-4">{step.label}</h2>
              {step.content}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
