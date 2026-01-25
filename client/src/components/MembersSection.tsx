import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

interface MembersSectionProps {
  members?: Member[];
}

const defaultMembers: Member[] = [
  {
    id: 1,
    name: '森平心',
    role: '代表',
    bio: '組織の運営全般を統括。学生のキャリア支援と組織の発展に尽力しています。',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    email: 'morihira@elite-student.org',
    github: 'morihira-shin',
    linkedin: 'morihira-shin',
  },
  {
    id: 2,
    name: '新谷壮太郎',
    role: 'イベント企画責任者',
    bio: 'セミナーやワークショップの企画・運営を担当。学生の学習機会の創出に注力しています。',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    email: 'shingai@elite-student.org',
    github: 'shingai-sotaro',
    linkedin: 'shingai-sotaro',
  },
  {
    id: 3,
    name: '大嵜翔舞',
    role: '技術責任者',
    bio: 'ウェブサイトやアプリケーション開発を主導。最新技術の導入と研究を推進しています。',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    email: 'osaki@elite-student.org',
    github: 'osaki-shoma',
    linkedin: 'osaki-shoma',
  },
  {
    id: 4,
    name: '山本和葉',
    role: 'コミュニティマネージャー',
    bio: 'メンバー間のコミュニケーション促進と地域連携を担当。組織の絆を強化しています。',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    email: 'yamamoto@elite-student.org',
    github: 'yamamoto-kazuha',
    linkedin: 'yamamoto-kazuha',
  },
];

/**
 * Members Section Component
 * Design: Neo-Classical Modernism with serif typography and professional gold accents
 * Color Scheme: Warm white background (#fafaf8), sophisticated dark text (#2d2d2a), professional gold (#c9a961)
 */
export default function MembersSection({ members = defaultMembers }: MembersSectionProps) {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 bg-[#fafaf8]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/members-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
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
              {/* Card container */}
              <div className="bg-white border border-[#e8e6e1] hover:border-[#c9a961] hover:shadow-xl transition-all rounded-lg overflow-hidden">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden bg-[#ebe9e4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#c9a961] mb-1"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#6b6b68] mb-3">{member.role}</p>
                  <p className="text-sm text-[#3a3a37] leading-relaxed mb-4">{member.bio}</p>

                  {/* Social links */}
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
  );
}
