import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Award } from 'lucide-react';

/**
 * Activities Page
 * Design: Neo-Classical Modernism with professional gold accents
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function Activities() {
  const activities = [
    {
      icon: BookOpen,
      title: 'セミナー・ワークショップ',
      description: '業界の専門家や思想家を招いた定期的な教育イベント。学生の知識拡大とスキル向上を目指しています。',
      details: [
        '月1回の定期セミナー開催',
        '業界別の専門ワークショップ',
        'キャリア開発プログラム',
        'スキルアップトレーニング',
      ],
    },
    {
      icon: Users,
      title: 'コミュニティサービス',
      description: '地域社会と世界への貢献を目指した意義のある活動。社会的責任を果たしながら学生の成長を支援します。',
      details: [
        'ボランティア活動',
        '地域イベント支援',
        '社会問題への取り組み',
        '国際協力プロジェクト',
      ],
    },
    {
      icon: Globe,
      title: 'ネットワーキングイベント',
      description: '同じ志を持つ仲間、メンターや業界人とのつながり。人脈形成とキャリア構築を支援します。',
      details: [
        '交流会・懇親会',
        'メンター制度',
        '業界人との対談',
        'グローバル交流プログラム',
      ],
    },
    {
      icon: Award,
      title: '学術・研究活動',
      description: '学生の研究活動を支援し、学術的な成果を発表する機会を提供しています。',
      details: [
        '研究発表会',
        '論文執筆支援',
        '学会参加支援',
        '学術賞への応募',
      ],
    },
  ];

  const monthlySchedule = [
    { month: '4月', event: '新年度オリエンテーション、メンバー募集' },
    { month: '5月', event: 'キャリア開発セミナー、ネットワーキング交流会' },
    { month: '6月', event: 'スキルアップワークショップ、ボランティア活動' },
    { month: '7月', event: '夏期インターンシップ支援、国際交流プログラム' },
    { month: '8月', event: 'サマーキャンプ、リーダーシップトレーニング' },
    { month: '9月', event: '秋学期セミナー開始、新規プロジェクト始動' },
    { month: '10月', event: '学術発表会、業界人との対談' },
    { month: '11月', event: '感謝祭イベント、成果報告会' },
    { month: '12月', event: '年末懇親会、来年計画策定' },
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
            <span className="text-[#c9a961]">内容</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-[#3a3a37]"
          >
            学生の成長を支援するための多様な活動
          </motion.p>
        </div>
      </div>

      {/* Main Activities */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-lg transition-all rounded-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block mb-4"
                >
                  <Icon className="text-[#c9a961]" size={40} />
                </motion.div>
                <h3
                  className="text-2xl font-bold text-[#c9a961] mb-3"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {activity.title}
                </h3>
                <p className="text-[#3a3a37] mb-4 leading-relaxed">
                  {activity.description}
                </p>
                <ul className="space-y-2">
                  {activity.details.map((detail, i) => (
                    <li key={i} className="text-sm text-[#6b6b68] flex items-start">
                      <span className="text-[#c9a961] mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Monthly Schedule */}
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
              <span className="text-[#2d2d2a]">年間</span>
              <span className="text-[#c9a961]">スケジュール</span>
            </h2>
            <p className="text-[#3a3a37] text-lg max-w-2xl mx-auto">
              通年を通じた多様な活動計画
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {monthlySchedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-white border border-[#e8e6e1] rounded-lg hover:border-[#c9a961] transition-all"
              >
                <h3
                  className="text-lg font-bold text-[#c9a961] mb-2"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {item.month}
                </h3>
                <p className="text-[#3a3a37] text-sm">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Info */}
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
            <span className="text-[#c9a961]">参加</span>
            <span className="text-[#2d2d2a]">方法</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: '情報収集', desc: 'ウェブサイトやSNSで活動情報を確認' },
              { step: '2', title: '申し込み', desc: 'イベント参加フォームから申し込み' },
              { step: '3', title: '参加・成長', desc: 'イベントに参加して学習と成長' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 bg-[#c9a961] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#2d2d2a] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#3a3a37]">{item.desc}</p>
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
