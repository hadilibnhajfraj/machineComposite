import React from 'react'
import { Box, Container, Typography, Grid, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const advantages = [
  'Équipe d\'ingénieurs certifiés internationalement',
  'Stock de pièces détachées disponible 24h/24',
  'Garantie constructeur 3 ans sur tous les équipements',
  'Délai de livraison garanti ou remboursement',
  'Formation opérateurs incluse à chaque livraison',
  'Service après-vente réactif et professionnel',
]

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: '#0A1628',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative element */}
      <Box
        sx={{
          position: 'absolute', right: -120, top: '50%',
          transform: 'translateY(-50%)',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21,101,192,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Image side */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* Main image */}
                <Box
                  sx={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    height: { xs: 300, md: 460 },
                    background: 'linear-gradient(135deg, #0D1F3C 0%, #112240 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%', height: '100%',
                      backgroundImage: 'url(/images/about-main.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(6,13,26,0.6) 0%, transparent 50%)',
                    }}
                  />
                </Box>

                {/* Floating badge */}
                <Box
                  sx={{
                    position: 'absolute', bottom: -24, right: -24,
                    p: 3, borderRadius: '16px',
                    background: 'rgba(6,13,26,0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(21,101,192,0.3)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    textAlign: 'center',
                    minWidth: 130,
                  }}
                >
                  <Typography sx={{ color: '#42A5F5', fontWeight: 900, fontSize: '2.4rem', lineHeight: 1 }}>
                    15+
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', mt: 0.5, fontWeight: 500 }}>
                    Années<br />d'Expertise
                  </Typography>
                </Box>

                {/* Second badge */}
                <Box
                  sx={{
                    position: 'absolute', top: 24, right: -16,
                    px: 2, py: 1.5, borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1565C0, #1976D2)',
                    boxShadow: '0 8px 24px rgba(21,101,192,0.4)',
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.4rem', lineHeight: 1 }}>
                    ISO
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.7rem' }}>
                    9001:2015
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Text side */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                sx={{
                  color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2,
                }}
              >
                — À Propos de Nous
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.9rem', md: '2.8rem' },
                  fontWeight: 800, color: '#fff', mb: 3, letterSpacing: '-0.02em', lineHeight: 1.2,
                }}
              >
                Pionnier en Solutions de{' '}
                <Box component="span" sx={{
                  background: 'linear-gradient(135deg, #42A5F5, #1976D2)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  Construction Industrielle
                </Box>
              </Typography>

              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.8, mb: 3 }}>
                Depuis 2009, Chahir Construction Machine s'impose comme le partenaire de référence pour les entreprises
                de construction qui exigent fiabilité, performance et innovation technologique.
              </Typography>

              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.8, mb: 4 }}>
                Notre réseau d'ingénieurs certifiés opère dans 50+ pays, apportant expertise locale et standards
                internationaux à chaque projet, quelle que soit son envergure.
              </Typography>

              <Box sx={{ mb: 4 }}>
                {advantages.map((adv, i) => (
                  <motion.div
                    key={adv}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                      <CheckCircleIcon sx={{ color: '#1976D2', fontSize: 20, mt: '2px', flexShrink: 0 }} />
                      <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem' }}>
                        {adv}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <Button
                component={Link}
                to="/about"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Notre Histoire Complète
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
