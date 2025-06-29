import { GuideTabs } from "@/components/GuideTabs";
import { TableOfContents } from "@/components/TableOfContents";

const steps = [
  {
    id: "step-1",
    label: "Nạp tiền bằng thẻ cào",
    content: (
      <>
        <p>
          Chọn mục <strong>Nạp tiền</strong> trên thanh điều hướng.
        </p>
        <p>
          Chọn hình thức <strong>Thẻ cào</strong>, nhập đúng mã thẻ và số seri.
        </p>
        <p>
          Nhấn nút <em>Xác nhận</em> để hoàn tất giao dịch.
        </p>
      </>
    ),
  },
  {
    id: "step-2",
    label: "Nạp tiền bằng QR Code",
    content: (
      <>
        <p>
          Chọn hình thức <strong>QR Code</strong>.
        </p>
        <p>Quét mã bằng ứng dụng ngân hàng hoặc ví điện tử.</p>
        <img
          src="/images/qr-example.png"
          alt="Hướng dẫn quét mã QR"
          className="rounded shadow"
        />
        <p>Chờ khoảng 1-2 phút để hệ thống xử lý giao dịch.</p>
      </>
    ),
  },
  {
    id: "step-3",
    label: "Nạp tiền bằng Momo",
    content: (
      <>
        <p>
          Chọn mục <strong>Momo</strong>, hệ thống sẽ hiển thị số ví nhận tiền.
        </p>
        <p>
          Chuyển khoản đúng số tiền và ghi nội dung đúng cú pháp hệ thống yêu
          cầu.
        </p>
      </>
    ),
  },
  {
    id: "step-4",
    label: "Nạp tiền bằng Coin",
    content: (
      <>
        <p>
          Chọn <strong>Coin</strong> (USDT, BTC...), hệ thống sẽ cấp ví điện tử.
        </p>
        <p>Chuyển đúng số lượng và kiểm tra lại mạng blockchain đã chọn.</p>
      </>
    ),
  },
];

export default function DepositPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <GuideTabs />
      <div className="flex">
        <main className="flex-1 space-y-32 scroll-smooth py-10">
          {steps.map((step) => (
            <section
              key={step.id}
              id={step.id}
              className="scroll-mt-24 min-h-[50vh]"
            >
              <h2 className="text-2xl font-bold mb-4">{step.label}</h2>
              {step.content}
            </section>
          ))}
        </main>
        <aside className="w-64 hidden lg:block">
          <TableOfContents sections={steps} />
        </aside>
      </div>
    </div>
  );
}
