export default function Home() {
  return (
    <main className="p-10 max-w-5xl mx-auto space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Tu Dirección Virtual desde Chamberí</h1>
        <p className="text-lg text-gray-600">Madrid 최저가, 빠른 계약, 100% 온라인</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">지금 시작하기</button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">요금제</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { name: "3개월", price: "30€/월", total: "총 90€" },
            { name: "6개월", price: "28€/월", total: "총 168€" },
            { name: "9개월", price: "26€/월", total: "총 234€" },
            { name: "12개월", price: "24€/월", total: "총 288€" },
          ].map((plan, i) => (
            <div key={i} className="p-6 border rounded-lg shadow space-y-2 text-center">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p>{plan.price}</p>
              <p className="text-sm text-gray-500">{plan.total}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">선택하기</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">경쟁사 비교</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">항목</th>
                <th className="p-2 border">우리의 서비스</th>
                <th className="p-2 border">경쟁사 A</th>
                <th className="p-2 border">경쟁사 B</th>
                <th className="p-2 border">경쟁사 C</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["가격 (월 기준)", "24~30€", "35€", "40€", "50€"],
                ["계약 속도", "당일 등록 가능", "2~3일 소요", "1일", "3일"],
                ["온라인 결제", "✅", "✅", "❌", "✅"],
                ["실제 주소지", "✅ (Chamberí)", "✅", "✅", "✅"],
                ["우편 알림 서비스", "제공 예정", "❌", "❌", "❌"],
                ["다국어 지원", "🇪🇸 🇬🇧 (🇰🇷 가능)", "🇪🇸", "🇪🇸", "🇪🇸"],
                ["최소 계약 기간", "1개월", "3개월", "6개월", "1개월"],
                ["이메일/전화 응대", "✅ (빠른 응답)", "느림", "보통", "느림"],
                ["계약 방식", "100% 온라인", "대면 or 이메일", "이메일", "대면"]
              ].map((row, idx) => (
                <tr key={idx} className="border-t">
                  {row.map((cell, i) => (
                    <td key={i} className="p-2 border whitespace-nowrap">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}