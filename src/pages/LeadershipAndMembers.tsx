import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

/**
 * Leadership and Members Page
 * Design: Neo-Classical Modernism with professional gold accents
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function LeadershipAndMembers() {
  const members = [
    {
      id: 1,
      name: '田中太郎',
      role: '代表',
      bio: '組織の運営全般を統括。学生のキャリア支援と組織の発展に尽力しています。',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      email: 'tanaka@elite-student.org',
      github: 'tanaka-taro',
      linkedin: 'tanaka-taro',
    },
    {
      id: 2,
      name: '佐藤花子',
      role: 'イベント企画責任者',
      bio: 'セミナーやワークショップの企画・運営を担当。学生の学習機会の創出に注力しています。',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      email: 'sato@elite-student.org',
      github: 'sato-hanako',
      linkedin: 'sato-hanako',
    },
    {
      id: 3,
      name: '鈴木次郎',
      role: '技術責任者',
      bio: 'ウェブサイトやアプリケーション開発を主導。最新技術の導入と研究を推進しています。',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      email: 'suzuki@elite-student.org',
      github: 'suzuki-jiro',
      linkedin: 'suzuki-jiro',
    },
    {
      id: 4,
      name: '山田美咲',
      role: 'コミュニティマネージャー',
      bio: 'メンバー間のコミュニケーション促進と地域連携を担当。組織の絆を強化しています。',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      email: 'yamada@elite-student.org',
      github: 'yamada-misaki',
      linkedin: 'yamada-misaki',
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
            <span className="text-[#2d2d2a]">代表挨拶</span>
            <span className="text-[#c9a961]">・</span>
            <span className="text-[#2d2d2a]">メンバー</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-[#3a3a37]"
          >
            組織を支える優秀なメンバーたちをご紹介します
          </motion.p>
        </div>
      </div>

      {/* President's Message */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2
              className="text-4xl font-bold mb-6 text-[#2d2d2a]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              代表からの
              <span className="text-[#c9a961]">メッセージ</span>
            </h2>
            <div className="space-y-4 text-[#3a3a37] leading-relaxed">
              <p>
                エリート学生団体の代表を務めさせていただいております、田中太郎です。
              </p>
              <p>
                当団体は、学生の成長と社会への貢献を最大の使命としています。単なる学習機会の提供に留まらず、メンバー一人ひとりが自分の可能性を最大限に引き出し、将来のリーダーとして活躍できるよう支援することを目指しています。
              </p>
              <p>
                私たちは、多様な背景を持つ学生たちが集まり、互いに学び、成長できるコミュニティを構築しています。困難な課題に直面しても、チーム全体で協力し、創意工夫を凝らして解決策を見つけ出す。そうした経験こそが、真の成長につながると信じています。
              </p>
              <p>
                今後も、社会の変化に対応しながら、より多くの学生に価値のある機会を提供し、次世代のリーダーシップを育成していく所存です。皆様のご支援とご協力をお願いいたします。
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
              alt="代表"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Members Section */}
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
              className="text-4xl md:text-5xl font-bold mb-4 text-[#2d2d2a]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              <span className="text-[#2d2d2a]">チーム</span>
              <span className="text-[#c9a961]">メンバー</span>
            </h2>
            <p className="text-[#3a3a37] text-lg max-w-2xl mx-auto">
              優秀で情熱的なメンバーが、学生団体の発展と皆さんの成長を支援しています
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-xl transition-all rounded-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden bg-[#ebe9e4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-[#c9a961] mb-1"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#6b6b68] mb-3">{member.role}</p>
                    <p className="text-sm text-[#3a3a37] leading-relaxed mb-4">{member.bio}</p>

                    <div className="flex gap-3 pt-4 border-t border-[#e8e6e1]">
                      {member.email && (
                        <motion.a
                          href={`mailto:${member.email}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-[#6b6b68] hover:text-[#c9a961] transition-colors"
                          title={member.email}
                        >
                          <Mail size={18} />
                        </motion.a>
                      )}
                      {member.github && (
                        <motion.a
                          href={`https://github.com/${member.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-[#6b6b68] hover:text-[#c9a961] transition-colors"
                          title="GitHub"
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {member.linkedin && (
                        <motion.a
                          href={`https://linkedin.com/in/${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-[#6b6b68] hover:text-[#c9a961] transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
}
