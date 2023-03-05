#include "TextureAttachment.hpp"

TextureAttachment::TextureAttachment(AttachmentType attachment, int width, int height)
    : m_attachmentType(attachment)
{
    if (width > 0 && height > 0)
    {
        ReplaceTexture(width, height);
    }
}

TextureAttachment::~TextureAttachment()
{
    if (m_textureId > 0)
    {
        glDeleteTextures(1, &m_textureId);
        m_textureId = 0;
    }
}

auto TextureAttachment::Type() const -> TextureAttachment::AttachmentType
{
    return m_attachmentType;
}

auto TextureAttachment::TextureId() const -> GLuint
{
    return m_textureId;
}

void TextureAttachment::SetSize(int width, int height)
{
    if (width > 0 && height > 0)
    {
        ReplaceTexture(width, height);
    }
    else if (m_textureId > 0)
    {
        glDeleteTextures(1, &m_textureId);
        m_textureId = 0;
    }
}

void TextureAttachment::ReplaceTexture(int width, int height)
{
    if (m_textureId > 0)
    {
        glDeleteTextures(1, &m_textureId);
    }

    GLint internalFormat;
    GLint textureFormat;
    GLenum pixelFormat;

    switch(m_attachmentType)
    {
        case AttachmentType::Color:
            internalFormat = GL_RGBA;
            textureFormat = GL_RGBA;
            pixelFormat = GL_TEXTURE_2D;
            break;
        case AttachmentType::Depth:
            internalFormat = GL_DEPTH_COMPONENT;
            textureFormat = GL_DEPTH_COMPONENT;
            pixelFormat = GL_FLOAT;
            break;
        case AttachmentType::Stencil:
            internalFormat = GL_STENCIL_INDEX8;
            textureFormat = GL_STENCIL_INDEX;
            pixelFormat = GL_UNSIGNED_BYTE;
            break;
        case AttachmentType::DepthStencil:
            internalFormat = GL_DEPTH24_STENCIL8;
            textureFormat = GL_DEPTH_STENCIL;
            pixelFormat = GL_UNSIGNED_INT_24_8;
            break;

        default:
            return;
    }

    glGenTextures(1, &m_textureId);
    glBindTexture(GL_TEXTURE_2D, m_textureId);
    glTexImage2D(GL_TEXTURE_2D, 0, internalFormat, width, height, 0, textureFormat, pixelFormat, nullptr);

    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);

    glBindTexture(GL_TEXTURE_2D, 0);
}