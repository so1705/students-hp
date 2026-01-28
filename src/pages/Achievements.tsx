import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Trophy, Users, Globe, BookOpen } from 'lucide-react';

/**
 * Achievements Page
 * Design: Neo-Classical Modernism with professional gold accents
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function Achievements() {
  const achievements = [
    {
      year: '2024年',
      items: [
        '学生リーダーシップ賞受賞',
        'グローバル交流プログラム参加者50名達成',
        'セミナー開催数60回突破',
        '新規プロジェクト5件立ち上げ',
      ],
    },
    {
      year: '2023年',
      items: [
        '組織メンバー数150名達成',
        '国際交流5カ国展開',
        'ボランティア活動参加者延べ500名',
        '学術賞3件受賞',
      ],
    },
    {
      year: '2022年',
      items: [
        'デジタル化プロジェクト完了',
        'メディア掲載10回以上',
        'キャリア支援プログラム参加者100名',
        '新規パートナーシップ3社締結',
      ],
    },
  ];

  const highlights = [
    {
      icon: Trophy,
      title: '受賞実績',
      value: '15件',
      description: '学術賞、リーダーシップ賞など多数受賞',
    },
    {
      icon: Users,
      title: 'メンバー数',
      value: '150+',
      description: '全学部から参加する多様なメンバー',
    },
    {
      icon: Globe,
      title: '国際活動',
      value: '5カ国',
      description: 'グローバルな交流と協力',
    },
    {
      icon: BookOpen,
      title: 'セミナー開催',
      value: '60+',
      description: '年間開催数',
    },
  ];

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
            <span className="text-[#2d2d2a]">活動</span>
            <span className="text-[#c9a961]">実績</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-[#3a3a37]"
          >
            エリート学生団体の成果と実績
          </motion.p>
        </div>
      </div>

      {/* Key Highlights */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-lg transition-all rounded-lg text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block mb-4"
                >
                  <Icon className="text-[#c9a961]" size={48} />
                </motion.div>
                <p className="text-[#6b6b68] text-sm mb-2">{highlight.title}</p>
                <p
                  className="text-4xl font-bold text-[#c9a961] mb-3"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {highlight.value}
                </p>
                <p className="text-sm text-[#3a3a37]">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Yearly Achievements */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#f5f5f2]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold mb-4 text-[#2d2d2a]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              <span className="text-[#2d2d2a]">年別</span>
              <span className="text-[#c9a961]">実績</span>
            </h2>
            <p className="text-[#3a3a37] text-lg max-w-2xl mx-auto">
              過去3年間の主な成果
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-lg transition-all rounded-lg"
              >
                <h3
                  className="text-2xl font-bold text-[#c9a961] mb-6"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {achievement.year}
                </h3>
                <ul className="space-y-3">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="text-[#3a3a37] flex items-start">
                      <span className="text-[#c9a961] mr-3 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <h2
            className="text-4xl font-bold mb-8 text-[#2d2d2a]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            <span className="text-[#c9a961]">社会</span>
            <span className="text-[#2d2d2a]">への貢献</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'ボランティア活動',
                description: '延べ500名以上の学生がボランティア活動に参加し、地域社会に貢献',
              },
              {
                title: 'キャリア支援',
                description: '100名以上の学生のキャリア開発をサポート。多くが希望職への就職を実現',
              },
              {
                title: '学術貢献',
                description: '学生の研究成果を学会で発表。複数の学術賞を受賞',
              },
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-white border border-[#e8e6e1] rounded-lg hover:border-[#c9a961] transition-all"
              >
                <h3
                  className="text-xl font-bold text-[#c9a961] mb-3"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {impact.title}
                </h3>
                <p className="text-[#3a3a37] leading-relaxed">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
      <Footer />
    </>
  );
}
