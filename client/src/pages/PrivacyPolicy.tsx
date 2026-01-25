import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

/**
 * Privacy Policy Page
 * Design: Neo-Classical Modernism with professional gold accents
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <div className="bg-[#fafaf8] text-[#2d2d2a] min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#fafaf8] to-white pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            <span className="text-[#2d2d2a]">プライバシー</span>
            <span className="text-[#c9a961]">ポリシー</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-[#3a3a37]"
          >
            個人情報の保護と取り扱いについて
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section 1 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              1. 個人情報の定義
            </h2>
            <p className="text-[#3a3a37] leading-relaxed">
              本プライバシーポリシーにおける「個人情報」とは、氏名、メールアドレス、電話番号、住所、学籍番号など、特定の個人を識別できる情報を指します。
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              2. 個人情報の収集
            </h2>
            <p className="text-[#3a3a37] leading-relaxed mb-4">
              当団体は、以下の場合に個人情報を収集します：
            </p>
            <ul className="space-y-2 text-[#3a3a37]">
              <li>• イベント参加申し込み時</li>
              <li>• メンバー登録時</li>
              <li>• お問い合わせフォーム送信時</li>
              <li>• ニュースレター登録時</li>
              <li>• ウェブサイト利用時（アクセスログなど）</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              3. 個人情報の利用目的
            </h2>
            <p className="text-[#3a3a37] leading-relaxed mb-4">
              収集した個人情報は、以下の目的でのみ利用します：
            </p>
            <ul className="space-y-2 text-[#3a3a37]">
              <li>• イベント参加者への連絡・通知</li>
              <li>• メンバー管理および活動情報の提供</li>
              <li>• お問い合わせへの対応</li>
              <li>• ニュースレター配信</li>
              <li>• ウェブサイト利用状況の分析と改善</li>
              <li>• 法令遵守および権利保護</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              4. 個人情報の保護
            </h2>
            <p className="text-[#3a3a37] leading-relaxed">
              当団体は、個人情報を厳格に管理し、不正アクセス、改ざん、漏洩などから保護するための適切なセキュリティ対策を講じています。個人情報へのアクセスは、業務上必要な者に限定されます。
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              5. 個人情報の第三者提供
            </h2>
            <p className="text-[#3a3a37] leading-relaxed">
              当団体は、法令に基づく場合を除き、本人の同意なしに個人情報を第三者に提供することはありません。ただし、以下の場合は例外とします：
            </p>
            <ul className="space-y-2 text-[#3a3a37] mt-4">
              <li>• 法令で要求された場合</li>
              <li>• 人命保護のため緊急に必要な場合</li>
              <li>• 本人が同意した場合</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              6. クッキーの使用
            </h2>
            <p className="text-[#3a3a37] leading-relaxed">
              当ウェブサイトは、ユーザーの利用体験を向上させるためにクッキーを使用しています。クッキーは個人を特定するものではなく、ウェブサイトの利用状況の分析に使用されます。ブラウザの設定によりクッキーを無効にすることができます。
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              7. 個人情報へのアクセス・修正・削除
            </h2>
            <p className="text-[#3a3a37] leading-relaxed">
              本人は、当団体に対して、自身の個人情報の開示、修正、削除を請求することができます。ご希望の場合は、以下の連絡先までお問い合わせください。
            </p>
            <p className="text-[#3a3a37] leading-relaxed mt-4">
              メール：info@elite-student.org
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              8. ポリシーの変更
            </h2>
            <p className="text-[#3a3a37] leading-relaxed">
              当団体は、法令の変更やセキュリティの向上に対応するため、本プライバシーポリシーを予告なく変更することがあります。変更後のポリシーは、ウェブサイトに掲載された時点で有効となります。
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2
              className="text-3xl font-bold mb-4 text-[#c9a961]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              9. お問い合わせ
            </h2>
            <p className="text-[#3a3a37] leading-relaxed">
              本プライバシーポリシーに関するご質問やご不明な点がございましたら、以下の連絡先までお気軽にお問い合わせください。
            </p>
            <div className="mt-4 p-6 bg-white border border-[#e8e6e1] rounded-lg">
              <p className="font-bold text-[#c9a961] mb-2">エリート学生団体</p>
              <p className="text-[#3a3a37]">メール：info@elite-student.org</p>
              <p className="text-[#3a3a37]">住所：大学キャンパス内</p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center pt-8 border-t border-[#e8e6e1]">
            <p className="text-[#6b6b68] text-sm">
              最終更新日：2026年1月25日
            </p>
          </div>
        </motion.div>
      </section>
    </div>
      <Footer />
    </>
  );
}
