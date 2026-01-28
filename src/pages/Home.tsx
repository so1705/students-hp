import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import MembersSection from '@/components/MembersSection';
import Navigation from '@/components/Navigation';
import { ChevronDown, Github, Mail, MapPin } from 'lucide-react';

/**
 * Elite Student Organization Homepage
 * Design: Neo-Classical Modernism with sophisticated gold accents, serif typography, and scroll animations
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 * Typography: Noto Serif JP for headings, Noto Sans JP for body
 * Language: Japanese
 */
export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const { scrollY } = useScroll();

  // Parallax effects
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className="bg-[#fafaf8] text-[#2d2d2a] overflow-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-[#fafaf8] to-white"
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/images/hero-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-white/15 z-1" />

          {/* Hero content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1
                className="text-5xl md:text-7xl font-bold mb-6 text-[#2d2d2a]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                <span className="text-[#2d2d2a]">エリート</span>
                <br />
                <span className="text-[#c9a961]">学生団体</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-[#3a3a37] mb-8"
            >
              卓越性、革新、そしてコミュニティを通じて学生を支援する
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-white transition-all duration-300 font-semibold"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              詳しく見る
            </motion.button>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <ChevronDown className="text-[#c9a961]" size={32} />
          </motion.div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-[#2d2d2a]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              <span className="text-[#2d2d2a]">私たちに</span>
              <span className="text-[#c9a961]">ついて</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-[#3a3a37] leading-relaxed">
                  当学生団体は、学業成績の向上、個人の成長、そして地域社会への貢献に焦点を当てた、情熱的な学生たちが集まった組織です。意義のある活動と学習機会を創出することで、メンバーの成長を支援しています。
                </p>
                <p className="text-lg text-[#3a3a37] leading-relaxed">
                  誠実性、協力、革新という原則に基づき、将来世界を形作る次世代のリーダーを育成することを目指しています。
                </p>

                <div className="pt-6 flex gap-4">
                  <motion.a
                    href="/philosophy"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-white transition-all inline-block"
                  >
                    詳しく知る
                  </motion.a>
                  <motion.a
                    href="/leadership-members"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-[#c9a961] text-white hover:bg-[#9d7e3f] transition-all inline-block"
                  >
                    参加する
                  </motion.a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(/images/about-section.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-20 md:py-32 px-4 md:px-6 bg-[#f5f5f2]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#2d2d2a]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                <span className="text-[#2d2d2a]">私たちの</span>
                <span className="text-[#c9a961]">活動</span>
              </h2>

              {/* Background image */}
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{
                  backgroundImage: 'url(/images/activities-bg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <p className="text-center text-[#3a3a37] mb-12 max-w-2xl mx-auto">
                学生の成長を支援するための多様な活動を展開しています
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'セミナー・ワークショップ',
                    description: '業界の専門家や思想家を招いた定期的な教育イベント',
                    icon: '📚',
                  },
                  {
                    title: 'コミュニティサービス',
                    description: '地域社会と世界への貢献を目指した意義のある活動',
                    icon: '🤝',
                  },
                  {
                    title: 'ネットワーキングイベント',
                    description: '同じ志を持つ仲間、メンターや業界人とのつながり',
                    icon: '🌐',
                  },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="p-8 bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-lg transition-all rounded-lg"
                  >
                    <div className="text-4xl mb-4">{activity.icon}</div>
                    <h3
                      className="text-xl font-bold mb-4 text-[#c9a961]"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {activity.title}
                    </h3>
                    <p className="text-[#3a3a37]">{activity.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Members Section */}
        <section id="members">
          <MembersSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-[#2d2d2a]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              <span className="text-[#2d2d2a]">お問い合わせ</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <motion.a
                href="mailto:info@elite-student.org"
                whileHover={{ y: -5 }}
                className="p-6 bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-lg transition-all rounded-lg text-center"
              >
                <Mail className="text-[#c9a961] mx-auto mb-4" size={32} />
                <p className="font-semibold text-[#2d2d2a] mb-2">メール</p>
                <p className="text-sm text-[#3a3a37]">info@elite-student.org</p>
              </motion.a>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-lg transition-all rounded-lg text-center"
              >
                <MapPin className="text-[#c9a961] mx-auto mb-4" size={32} />
                <p className="font-semibold text-[#2d2d2a] mb-2">住所</p>
                <p className="text-sm text-[#3a3a37]">大学キャンパス内</p>
              </motion.div>

              <motion.a
                href="https://github.com/elite-student-org"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-6 bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-lg transition-all rounded-lg text-center"
              >
                <Github className="text-[#c9a961] mx-auto mb-4" size={32} />
                <p className="font-semibold text-[#2d2d2a] mb-2">GitHub</p>
                <p className="text-sm text-[#3a3a37]">プロジェクト確認</p>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
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
                    <a href="/" className="text-gray-400 hover:text-[#c9a961]">
                      ホーム
                    </a>
                  </li>
                  <li>
                    <a href="/philosophy" className="text-gray-400 hover:text-[#c9a961]">
                      活動理念
                    </a>
                  </li>
                  <li>
                    <a href="/organization" className="text-gray-400 hover:text-[#c9a961]">
                      組織概要
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">活動</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/activities" className="text-gray-400 hover:text-[#c9a961]">
                      活動内容
                    </a>
                  </li>
                  <li>
                    <a href="/achievements" className="text-gray-400 hover:text-[#c9a961]">
                      活動実績
                    </a>
                  </li>
                  <li>
                    <a href="/leadership-members" className="text-gray-400 hover:text-[#c9a961]">
                      メンバー
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">その他</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/privacy-policy" className="text-gray-400 hover:text-[#c9a961]">
                      プライバシーポリシー
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@elite-student.org" className="text-gray-400 hover:text-[#c9a961]">
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
      </div>
    </>
  );
}
