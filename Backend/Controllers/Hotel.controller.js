const HotelModal = require("../Modals/Hotel.modal.js");
const UserModal = require("../Modals/User.modal.js");

exports.getHotels = async (req, res) => {
    try {
        const hotels = await HotelModal.find();

        res.json({
            success: "Hotels fetched successfully",
            hotels
        });

    } catch (error) {
        console.error("Error fetching hotels:", error);
        res.status(500).json({
            message: "Error fetching hotels",
            error: error.message
        });
    }
};

exports.createHotel = async (req, res) => {
    try {
        const user = req.user;
        const { name, city, address, description } = req.body;

        const findUser = await UserModal.findById(user._id);

        if (!findUser) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        if (user.role !== "admin") {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const find = await HotelModal.findOne({ name, city, address });

        if (find) {
            return res.status(400).json({
                message: "Hotel already exists"
            });
        }

        const hotel = await HotelModal.create({
            name,
            city,
            address,
            description
        });

        res.json({
            success: "New Hotel is added to the application",
            hotel
        });
    } catch (error) {
        console.error("Error creating hotel:", error);
        res.status(500).json({
            message: "Error creating hotel",
            error: error.message
        });
    }
};

exports.editHotel = async (req, res) => {
    try {
        const user = req.user;
        const hotelId = req.params.id;
        const { name, city, address, description } = req.body;

        if (user.role !== "admin") {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const findUser = await UserModal.findById(user._id);

        if (!findUser || findUser.role !== "admin") {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const findHotel = await HotelModal.findById(hotelId);

        if (!findHotel) {
            return res.status(404).json({
                message: "Hotel not found"
            });
        }

        findHotel.name = name;
        findHotel.city = city;
        findHotel.address = address;
        findHotel.description = description;

        await findHotel.save();

        return res.json({
            success: "Hotel updated successfully",
            findHotel
        });
    } catch (error) {
        console.error("Error editing hotel:", error);
        res.status(500).json({
            message: "Error editing hotel",
            error: error.message
        });
    }
};

exports.deleteHotel = async (req, res) => {
    const user = req.user;
    const hotelId = req.params.id;

    if (user.role !== "admin") {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const findUser = await UserModal.findById(user._id);

    if (!findUser || findUser.role !== "admin") {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const findHotel = await HotelModal.findById(hotelId);

    if (!findHotel) {
        return res.status(404).json({
            message: "Hotel not found"
        });
    }

    await HotelModal.findByIdAndDelete(hotelId);

    return res.json({
        success: "Hotel deleted successfully"
    });
};
