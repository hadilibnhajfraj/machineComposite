import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import VerifiedIcon from '@mui/icons-material/Verified'
import GppGoodIcon from '@mui/icons-material/GppGood'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import StarIcon from '@mui/icons-material/Star'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload'
import ShieldIcon from '@mui/icons-material/Shield'

const certs = [
  { icon: <VerifiedIcon sx={{ fontSize: 40 }} />, name: 'ISO 9001:2015', desc: 'Management Qualité', color: '#1565C0' },
  { icon: <GppGoodIcon sx={{ fontSize: 40 }} />, name: 'CE Marking', desc: 'Conformité Européenne', color: '#0288D1' },
  { icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />, name: 'ISO 14001', desc: 'Management Environnemental', color: '#0097A7' },
  { icon: <MilitaryTechIcon sx={{ fontSize: 40 }} />, name: 'OHSAS 18001', desc: 'Santé & Sécurité', color: '#1565C0' },
  { icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />, name: 'EN 13001', desc: 'Sécurité des Grues', color: '#0288D1' },
  { icon: <StarIcon sx={{ fontSize: 40 }} />, name: 'NF P22-170', desc: 'Norme Coffrage France', color: '#0097A7' },
  { icon: <AssuredWorkloadIcon sx={{ fontSize: 40 }} />, name: 'DNV GL', desc: 'Certification Marine', color: '#1565C0' },
  { icon: <ShieldIcon sx={{ fontSize: 40 }} />, name: 'TÜV Rheinland', desc: 'Inspection Indépendante', color: '#0288D1' },
]

export default function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #0A1628 0%, #060D1A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem',
                letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2,
              }}
            >
              — Accréditations
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, color: '#fff', mb: 2, letterSpacing: '-0.02em' }}
            >
              Certifications &{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #42A5F5, #1976D2)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Normes
              </Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 560, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Nos équipements répondent aux normes internationales les plus strictes, garantissant qualité et sécurité.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {certs.map((cert, index) => (
            <Grid item xs={6} sm={4} md={3} key={cert.name}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Box
                  sx={{
                    p: 3, borderRadius: '16px', textAlign: 'center',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    '&:hover': {
                      background: `rgba(255,255,255,0.06)`,
                      border: `1px solid ${cert.color}40`,
                      transform: 'translateY(-4px)',
                      boxShadow: `0 16px 40px ${cert.color}25`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 72, height: 72, borderRadius: '50%', mx: 'auto', mb: 2,
                      background: `${cert.color}15`,
                      border: `2px solid ${cert.color}35`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: cert.color,
                    }}
                  >
                    {cert.icon}
                  </Box>
                  <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>
                    {cert.name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>
                    {cert.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Box
            sx={{
              mt: 8, p: { xs: 3, md: 4 }, borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(21,101,192,0.12) 0%, rgba(2,136,209,0.08) 100%)',
              border: '1px solid rgba(21,101,192,0.25)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            {[
              { label: 'Inspection Annuelle', value: '100%' },
              { label: 'Renouvellement Certifs', value: 'À jour' },
              { label: 'Audits Réussis', value: '100%' },
              { label: 'Conformité Réglementaire', value: 'Totale' },
            ].map((item) => (
              <Box key={item.label} sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#42A5F5', fontWeight: 800, fontSize: '1.6rem' }}>
                  {item.value}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
