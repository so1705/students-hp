import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Globe } from 'lucide-react';

/**
 * Organization Page
 * Design: Neo-Classical Modernism with professional gold accents
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function Organization() {
  const stats = [
    { icon: Users, label: 'メンバー数', value: '150+' },
    { icon: Calendar, label: '設立年', value: '2015年' },
    { icon: MapPin, label: '拠点', value: '大学キャンパス' },
    { icon: Globe, label: '国際活動', value: '5カ国' },
  ];

  const departments = [
    {
      name: '企画・運営部',
      description: 'セミナー、ワークショップ、イベントの企画・運営を担当。学生の学習機会の創出に注力しています。',
    },
    {
      name: '技術部',
      description: 'ウェブサイト、アプリケーション、デジタルツールの開発・管理を担当。最新技術の導入を推進しています。',
    },
    {
      name: 'コミュニティ部',
      description: 'メンバー間のコミュニケーション促進、地域連携、ネットワーキングを担当。組織の絆を強化しています。',
    },
    {
      name: '広報部',
      description: '組織の情報発信、メディア対応、ブランディングを担当。社会への認知度向上に注力しています。',
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
            <span className="text-[#2d2d2a]">組織</span>
            <span className="text-[#c9a961]">概要</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-[#3a3a37]"
          >
            エリート学生団体の組織構成と概要
          </motion.p>
        </div>
      </div>

      {/* Key Stats */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block mb-4"
                >
                  <Icon className="text-[#c9a961]" size={48} />
                </motion.div>
                <p className="text-[#6b6b68] text-sm mb-2">{stat.label}</p>
                <p
                  className="text-3xl font-bold text-[#2d2d2a]"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {stat.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#f5f5f2]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h2
                className="text-3xl font-bold mb-6 text-[#2d2d2a]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                <span className="text-[#c9a961]">組織</span>
                <span className="text-[#2d2d2a]">情報</span>
              </h2>
              <div className="space-y-4 text-[#3a3a37]">
                <div>
                  <p className="font-bold text-[#c9a961]">団体名</p>
                  <p>エリート学生団体</p>
                </div>
                <div>
                  <p className="font-bold text-[#c9a961]">設立年</p>
                  <p>2015年4月</p>
                </div>
                <div>
                  <p className="font-bold text-[#c9a961]">所在地</p>
                  <p>大学キャンパス内</p>
                </div>
                <div>
                  <p className="font-bold text-[#c9a961]">メンバー数</p>
                  <p>150名以上</p>
                </div>
                <div>
                  <p className="font-bold text-[#c9a961]">代表</p>
                  <p>田中太郎</p>
                </div>
                <div>
                  <p className="font-bold text-[#c9a961]">連絡先</p>
                  <p>info@elite-student.org</p>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-3xl font-bold mb-6 text-[#2d2d2a]"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                <span className="text-[#c9a961]">活動</span>
                <span className="text-[#2d2d2a]">実績</span>
              </h2>
              <div className="space-y-3 text-[#3a3a37]">
                <p>✓ 年間50回以上のセミナー・ワークショップ開催</p>
                <p>✓ 5カ国での国際交流プログラム実施</p>
                <p>✓ 地域社会への貢献活動を継続実施</p>
                <p>✓ 100名以上の学生のキャリア支援</p>
                <p>✓ 複数の学術賞を受賞</p>
                <p>✓ メディア掲載実績多数</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
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
            <span className="text-[#2d2d2a]">組織</span>
            <span className="text-[#c9a961]">構成</span>
          </h2>
          <p className="text-[#3a3a37] text-lg max-w-2xl mx-auto">
            4つの部門で組織を構成し、それぞれが専門的な役割を果たしています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
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
                className="text-2xl font-bold text-[#c9a961] mb-4"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {dept.name}
              </h3>
              <p className="text-[#3a3a37] leading-relaxed">{dept.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
}
