/**
 * Global Footer Component
 * Design: Neo-Classical Modernism with professional gold accents
 * Color Scheme: Dark background (#2d2d2a), white text, professional gold (#c9a961)
 */
export default function Footer() {
  return (
    <footer className="bg-[#2d2d2a] text-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3
              className="font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              エリート学生団体
            </h3>
            <p className="text-sm text-gray-400">
              学生の成長と社会への貢献を支援する組織
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">ナビゲーション</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  ホーム
                </a>
              </li>
              <li>
                <a href="/philosophy" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  活動理念
                </a>
              </li>
              <li>
                <a href="/organization" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  組織概要
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">活動</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/activities" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  活動内容
                </a>
              </li>
              <li>
                <a href="/achievements" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  活動実績
                </a>
              </li>
              <li>
                <a href="/leadership-members" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  メンバー
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">その他</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="mailto:info@elite-student.org" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 エリート学生団体. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
