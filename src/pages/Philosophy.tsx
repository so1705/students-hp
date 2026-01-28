import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

/**
 * Philosophy Page
 * Design: Neo-Classical Modernism with professional gold accents
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function Philosophy() {
  const values = [
    {
      icon: Heart,
      title: '誠実性',
      description: '私たちは、常に誠実さを持って行動し、信頼できるパートナーとして活動しています。',
    },
    {
      icon: Users,
      title: '協力',
      description: '多様な背景を持つメンバーが協力し、共に成長することを大切にしています。',
    },
    {
      icon: Lightbulb,
      title: '革新',
      description: '既存の枠にとらわれず、新しいアイデアと視点を積極的に取り入れています。',
    },
    {
      icon: Target,
      title: '卓越性',
      description: '常に最高の成果を目指し、メンバーの成長と組織の発展に尽力しています。',
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
            <span className="text-[#c9a961]">理念</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-[#3a3a37]"
          >
            私たちの活動を支える基本的な考え方と価値観
          </motion.p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold mb-6 text-[#2d2d2a]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            私たちの
            <span className="text-[#c9a961]">ミッション</span>
          </h2>
          <p className="text-lg text-[#3a3a37] leading-relaxed max-w-3xl mx-auto">
            エリート学生団体は、学生の学業成績の向上、個人の成長、そして社会への貢献を支援することを使命としています。私たちは、意義のある活動と学習機会を創出し、メンバーが自分の可能性を最大限に引き出せるコミュニティを構築しています。
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <h2
            className="text-4xl font-bold mb-6 text-[#2d2d2a]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            私たちの
            <span className="text-[#c9a961]">ビジョン</span>
          </h2>
          <p className="text-lg text-[#3a3a37] leading-relaxed max-w-3xl mx-auto">
            将来世界を形作る次世代のリーダーを育成し、社会に貢献できる人材を輩出することです。私たちは、学生一人ひとりの才能を開花させ、グローバルな視点を持った思考力と行動力を備えた人材の育成を目指しています。
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
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
              <span className="text-[#2d2d2a]">コア</span>
              <span className="text-[#c9a961]">バリュー</span>
            </h2>
            <p className="text-[#3a3a37] text-lg max-w-2xl mx-auto">
              私たちが大切にしている4つの価値観
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
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
                  <h3
                    className="text-2xl font-bold text-[#c9a961] mb-3"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#3a3a37] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment */}
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
            私たちの
            <span className="text-[#c9a961]">コミットメント</span>
          </h2>

          <div className="space-y-6 text-lg text-[#3a3a37] leading-relaxed max-w-3xl mx-auto">
            <p>
              <span className="font-bold text-[#c9a961]">学生の成長支援</span>
              ：学業、キャリア、人格形成など、多面的な成長を支援するプログラムを提供します。
            </p>
            <p>
              <span className="font-bold text-[#c9a961]">社会への貢献</span>
              ：地域社会や国際社会への貢献活動を通じて、社会的責任を果たします。
            </p>
            <p>
              <span className="font-bold text-[#c9a961]">ダイバーシティの推進</span>
              ：異なる背景や視点を持つメンバーが共に学び、成長できる環境を構築します。
            </p>
            <p>
              <span className="font-bold text-[#c9a961]">透明性と信頼</span>
              ：組織の運営に関する情報を積極的に開示し、ステークホルダーとの信頼関係を構築します。
            </p>
          </div>
        </motion.div>
      </section>
    </div>
      <Footer />
    </>
  );
}
