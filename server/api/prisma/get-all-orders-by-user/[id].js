import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    // Lấy user hiện tại từ Supabase
    const user = await serverSupabaseUser(event)
    
    // Nếu không có user, trả về lỗi
    if (!user) {
        throw createError({
            statusCode: 401,
            message: 'Unauthorized'
        })
    }

    // Lấy orders của user hiện tại
    let orders = await prisma.orders.findMany({
        where: { userId: user.id },
        orderBy: { id: "desc" },
        include: { 
            orderItem: {
                include: {
                    product: true
                }
            }
        }
    })
    return orders
})