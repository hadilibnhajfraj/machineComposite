import React, { useState } from 'react'
import { Box, Container, Typography, Grid, TextField, Button, MenuItem, Alert, Snackbar } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SendIcon from '@mui/icons-material/Send'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const contactInfo = [
  { icon: <PhoneIcon />, label: 'Téléphone', value: '+213 21 XX XX XX', sub: 'Lun-Ven 8h-18h' },
  { icon: <EmailIcon />, label: 'Email', value: 'contact@chahir-cm.com', sub: 'Réponse sous 24h' },
  { icon: <LocationOnIcon />, label: 'Adresse', value: 'Zone Industrielle, Alger', sub: 'Algérie, 16000' },
  { icon: <AccessTimeIcon />, label: 'Horaires', value: 'Lun - Ven: 8h00 - 18h00', sub: 'Sam: 8h00 - 13h00' },
]

const services = [
  'Installation & Montage',
  'Maintenance Préventive',
  'Formation Technique',
  'Audit & Diagnostic',
  'Achat Équipement',
  'Support Technique',
]

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [snack, setSnack] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSnack(true)
    setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #060D1A 0%, #0A1628 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <Box sx={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(21,101,192,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2 }}>
              — Contactez-Nous
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, color: '#fff', mb: 2, letterSpacing: '-0.02em' }}>
              Démarrons votre{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #42A5F5, #1976D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Projet
              </Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 540, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Notre équipe d'experts est disponible pour répondre à toutes vos questions et vous proposer la solution adaptée.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={5}>
          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight={700} color="#fff" mb={1}>
                  Nos Coordonnées
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Contactez-nous directement ou remplissez le formulaire et nous vous répondrons rapidement.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {contactInfo.map((info, i) => (
                  <motion.div key={info.label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15 + i * 0.08 }}>
                    <Box
                      sx={{
                        display: 'flex', gap: 2, p: 2.5, borderRadius: '14px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          background: 'rgba(21,101,192,0.08)',
                          border: '1px solid rgba(21,101,192,0.3)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 44, height: 44, borderRadius: '10px', flexShrink: 0,
                          background: 'rgba(21,101,192,0.15)',
                          border: '1px solid rgba(21,101,192,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#42A5F5',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', fontWeight: 500, mb: 0.2 }}>
                          {info.label}
                        </Typography>
                        <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>
                          {info.value}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>
                          {info.sub}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Form */}
          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 5 }, borderRadius: '24px',
                  background: 'rgba(17,34,64,0.5)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth required label="Nom complet" name="name"
                      value={form.name} onChange={handleChange}
                      placeholder="Votre nom"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth label="Entreprise" name="company"
                      value={form.company} onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth required type="email" label="Email" name="email"
                      value={form.email} onChange={handleChange}
                      placeholder="votre@email.com"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth label="Téléphone" name="phone"
                      value={form.phone} onChange={handleChange}
                      placeholder="+213 XX XX XX XX"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth select label="Service souhaité" name="service"
                      value={form.service} onChange={handleChange}
                    >
                      {services.map((s) => (
                        <MenuItem key={s} value={s}>{s}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth required multiline rows={5} label="Message" name="message"
                      value={form.message} onChange={handleChange}
                      placeholder="Décrivez votre projet et vos besoins..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit" variant="contained" color="primary"
                      size="large" fullWidth endIcon={<SendIcon />}
                      sx={{ py: 1.8, fontSize: '1rem' }}
                    >
                      Envoyer le Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={snack} autoHideDuration={5000} onClose={() => setSnack(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" sx={{ borderRadius: '12px', background: '#1565C0', color: '#fff' }}>
          Message envoyé avec succès ! Nous vous répondrons sous 24h.
        </Alert>
      </Snackbar>
    </Box>
  )
}
