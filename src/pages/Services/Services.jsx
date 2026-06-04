import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import BuildIcon from '@mui/icons-material/Build'
import EngineeringIcon from '@mui/icons-material/Engineering'
import SchoolIcon from '@mui/icons-material/School'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SecurityIcon from '@mui/icons-material/Security'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ContactSection from '../../components/ContactSection/ContactSection'

const services = [
  {
    id: 'installation',
    icon: <EngineeringIcon sx={{ fontSize: 48 }} />,
    title: 'Installation & Montage',
    color: '#1565C0',
    desc: 'Nos ingénieurs certifiés prennent en charge l\'intégralité du processus d\'installation, depuis la réception des équipements jusqu\'à la mise en service complète.',
    features: ['Supervision par ingénieur senior', 'Tests et contrôle qualité', 'Documentation technique complète', 'Formation des opérateurs incluse', 'Garantie mise en service'],
    duration: '3-7 jours',
  },
  {
    id: 'maintenance',
    icon: <BuildIcon sx={{ fontSize: 48 }} />,
    title: 'Maintenance Préventive',
    color: '#0288D1',
    desc: 'Un programme de maintenance personnalisé pour maximiser la durée de vie de vos équipements et prévenir les pannes coûteuses.',
    features: ['Inspection mensuelle / trimestrielle', 'Remplacement préventif des pièces d\'usure', 'Rapport d\'état détaillé', 'Recommandations d\'optimisation', 'Garantie disponibilité machine 98%'],
    duration: 'Contrat annuel',
  },
  {
    id: 'formation',
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: 'Formation Technique',
    color: '#0097A7',
    desc: 'Formations complètes et certifiées pour vos équipes, dispensées par nos formateurs agréés avec plus de 10 ans d\'expérience terrain.',
    features: ['Formation théorique & pratique', 'Certification reconnue internationalement', 'Modules personnalisables', 'Formation en langue arabe / française', 'Support post-formation 6 mois'],
    duration: '2-5 jours',
  },
  {
    id: 'audit',
    icon: <AnalyticsIcon sx={{ fontSize: 48 }} />,
    title: 'Audit & Diagnostic',
    color: '#1565C0',
    desc: 'Analyse approfondie de votre parc machines et de vos processus pour identifier les axes d\'amélioration et maximiser votre ROI.',
    features: ['Audit complet du parc machines', 'Analyse des processus de production', 'Rapport avec recommandations chiffrées', 'Plan d\'action priorisé', 'Suivi de mise en œuvre'],
    duration: '1-3 jours',
  },
]

const faqs = [
  { q: 'Quel est le délai de livraison habituel ?', a: 'Selon la disponibilité en stock, nos délais varient de 2 à 8 semaines. Nous disposons d\'un stock tampon pour les équipements les plus demandés.' },
  { q: 'Proposez-vous des contrats de maintenance longue durée ?', a: 'Oui, nous proposons des contrats de 1 à 5 ans avec des tarifs dégressifs. Ces contrats incluent les pièces d\'usure et les interventions préventives.' },
  { q: 'Les formations sont-elles certifiées ?', a: 'Toutes nos formations sont certifiées et reconnues au niveau international. Les certificats sont valables 3 ans et peuvent être renouvelés.' },
  { q: 'Intervenez-vous en urgence ?', a: 'Notre équipe de support 24/7 garantit une première réponse sous 2 heures et une intervention sur site sous 24-48h selon votre localisation.' },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Box sx={{ background: '#0A1628', minHeight: '100vh' }}>
      {/* Hero */}
      <Box sx={{ pt: 18, pb: 12, background: 'linear-gradient(180deg, #060D1A 0%, #0A1628 100%)', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: '30%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,101,192,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <Container maxWidth="xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography sx={{ color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2 }}>
              — Nos Expertises
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 900, color: '#fff', mb: 3, letterSpacing: '-0.03em' }}>
              Services{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #42A5F5, #1976D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Industriels
              </Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: 680 }}>
              Des solutions complètes, de l'installation à la maintenance continue, pour garantir la performance optimale de vos équipements.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services detail */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={service.id} id={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%', p: 1,
                    border: `1px solid ${service.color}30`,
                    '&:hover': { border: `1px solid ${service.color}60`, transform: 'translateY(-6px)', boxShadow: `0 20px 60px ${service.color}20` },
                    transition: 'all 0.4s',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
                      <Box sx={{ p: 2, borderRadius: '14px', background: `${service.color}15`, border: `1px solid ${service.color}30`, color: service.color, flexShrink: 0 }}>
                        {service.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" fontWeight={700} color="#fff" mb={1}>{service.title}</Typography>
                        <Box sx={{ display: 'inline-block', px: 1.5, py: 0.4, borderRadius: '6px', background: `${service.color}20`, border: `1px solid ${service.color}40` }}>
                          <Typography sx={{ color: service.color, fontSize: '0.75rem', fontWeight: 600 }}>Durée : {service.duration}</Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', lineHeight: 1.75, mb: 3 }}>{service.desc}</Typography>
                    <Box>
                      {service.features.map((feat) => (
                        <Box key={feat} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: service.color, flexShrink: 0 }} />
                          <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>{feat}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ */}
      <Box sx={{ py: 10, background: '#060D1A' }}>
        <Container maxWidth="xl" sx={{ maxWidth: 900, mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography sx={{ color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2 }}>
              — FAQ
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 800, color: '#fff' }}>
              Questions Fréquentes
            </Typography>
          </Box>

          {faqs.map((faq, i) => (
            <motion.div key={faq.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Accordion
                sx={{
                  mb: 2, background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px !important',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { border: '1px solid rgba(21,101,192,0.3)', background: 'rgba(21,101,192,0.07)' },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#42A5F5' }} />}>
                  <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Container>
      </Box>

      <ContactSection />
    </Box>
  )
}
