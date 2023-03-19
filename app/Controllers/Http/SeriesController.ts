import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CollectionService from 'App/Services/CollectionService'
import HistoryService from 'App/Services/HistoryService'

export default class SeriesController {
  public async index({ view }: HttpContextContract) {
    const featured = await CollectionService.getFirstLastUpdated()
    const series = await CollectionService.getList()

    return view.render('pages/series/index', { featured, series })
  }

  public async show({ params, view, auth, route }: HttpContextContract) {
    const series = await CollectionService.getBySlug(auth, params.slug)
    const nextLesson = await CollectionService.findNextLesson(auth, series)

    await HistoryService.recordView(auth.user, series, route?.name)

    return view.render('pages/series/show', { series, nextLesson })
  }
}
