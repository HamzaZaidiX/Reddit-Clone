import { supabase } from '../../services/supabaseClient'

export default async (req, res) => {
  try {
      console.log(comments)
    const { data } = await supabase
      .from('comments')
      .select('*, users!inner(*)')
      .eq('postId', req.query.postId)

    res.send(200).send({ data: data })

    console.log(data)
    
  } catch (error) {
    res.send(500).send({ error: 'Error Fetching Comments' })
  }
}